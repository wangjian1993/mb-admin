<template>
	<a-card class="card" :bordered="false">
		<a-tabs type="card" @change="callback">
			<a-tab-pane key="1" tab="导入物料需求">
				<div :class="advanced ? 'search' : null">
					<a-form layout="horizontal">
						<div :class="advanced ? null : 'fold'">
							<a-row>
								<a-col :md="8" :sm="24">
									<a-form-item label="规则编号" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }"><a-input placeholder="请输入" /></a-form-item>
								</a-col>
								<a-col :md="8" :sm="24">
									<a-form-item label="使用状态" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
										<a-select placeholder="请选择">
											<a-select-option value="1">关闭</a-select-option>
											<a-select-option value="2">运行中</a-select-option>
										</a-select>
									</a-form-item>
								</a-col>
								<a-col :md="8" :sm="24">
									<a-form-item label="调用次数" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
										<a-input-number style="width: 100%" placeholder="请输入" />
									</a-form-item>
								</a-col>
							</a-row>
							<a-row v-if="advanced">
								<a-col :md="8" :sm="24">
									<a-form-item label="更新日期" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
										<a-date-picker style="width: 100%" placeholder="请输入更新日期" />
									</a-form-item>
								</a-col>
								<a-col :md="8" :sm="24">
									<a-form-item label="使用状态" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
										<a-select placeholder="请选择">
											<a-select-option value="1">关闭</a-select-option>
											<a-select-option value="2">运行中</a-select-option>
										</a-select>
									</a-form-item>
								</a-col>
								<a-col :md="8" :sm="24">
									<a-form-item label="描述" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }"><a-input placeholder="请输入" /></a-form-item>
								</a-col>
							</a-row>
						</div>
						<span style="float: right; margin-top: 3px;">
							<a-button type="primary">查询</a-button>
							<a-button style="margin-left: 8px">重置</a-button>
							<a @click="toggleAdvanced" style="margin-left: 8px">
								{{ advanced ? '收起' : '展开' }}
								<a-icon :type="advanced ? 'up' : 'down'" />
							</a>
						</span>
					</a-form>
				</div>
				<div>
					<div class="operator">
						<a-button @click="addNew" type="primary">新建</a-button>
						<a-button>批量操作</a-button>
						<a-dropdown>
							<a-menu @click="handleMenuClick" slot="overlay">
								<a-menu-item key="delete">删除</a-menu-item>
								<a-menu-item key="audit">审批</a-menu-item>
							</a-menu>
							<a-button>
								更多操作
								<a-icon type="down" />
							</a-button>
						</a-dropdown>
					</div>
					<standard-table
						:columns="columns"
						:dataSource="dataSource"
						:selectedRows.sync="selectedRows"
						@clear="onClear"
						@change="onChange"
						@selectedRowChange="onSelectChange"
					>
						<div slot="description" slot-scope="{ text }">{{ text }}</div>
						<div slot="action" slot-scope="{ text, record }">
							<a style="margin-right: 8px">
								<a-icon type="plus" />
								新增
							</a>
							<a style="margin-right: 8px">
								<a-icon type="edit" />
								编辑
							</a>
							<a @click="deleteRecord(record.key)">
								<a-icon type="delete" />
								删除1
							</a>
							<a @click="deleteRecord(record.key)" v-auth="`delete`">
								<a-icon type="delete" />
								删除2
							</a>
						</div>
						<template slot="statusTitle">
							<a-icon @click.native="onStatusTitleClick" type="info-circle" />
						</template>
					</standard-table>
				</div>
			</a-tab-pane>
			<a-tab-pane key="2" tab="物料需求明细">
				<a-form layout="horizontal">
					<div class="">
						<a-row>
							<a-col :md="8" :sm="24">
								<a-form-item label="产品品号" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-input placeholder="请输入" v-decorator="['username', { rules: [{ required: true, message: 'Please input your name' }] }]" />
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="需求公司" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-select placeholder="请选择">
										<a-select-option value="1">关闭</a-select-option>
										<a-select-option value="2">运行中</a-select-option>
									</a-select>
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="生产工厂" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-input placeholder="请输入" v-decorator="['username', { rules: [{ required: true, message: 'Please input your name' }] }]" />
								</a-form-item>
							</a-col>
						</a-row>
						<a-row v-if="advanced">
							<a-col :md="8" :sm="24">
								<a-form-item label="更新日期" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-date-picker style="width: 100%" placeholder="请输入更新日期" />
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="使用状态" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-select placeholder="请选择">
										<a-select-option value="1">关闭</a-select-option>
										<a-select-option value="2">运行中</a-select-option>
									</a-select>
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="描述" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }"><a-input placeholder="请输入" /></a-form-item>
							</a-col>
						</a-row>
					</div>
				</a-form>
			</a-tab-pane>
		</a-tabs>
	</a-card>
</template>
<script>
const columns = [
	{
		title: '规则编号',
		dataIndex: 'no'
	},
	{
		title: '描述',
		dataIndex: 'description',
		scopedSlots: { customRender: 'description' }
	},
	{
		title: '服务调用次数',
		dataIndex: 'callNo',
		sorter: true,
		needTotal: true,
		customRender: text => text + ' 次'
	},
	{
		dataIndex: 'status',
		needTotal: true,
		slots: { title: 'statusTitle' }
	},
	{
		title: '更新时间',
		dataIndex: 'updatedAt',
		sorter: true
	},
	{
		title: '操作',
		scopedSlots: { customRender: 'action' }
	}
];

const dataSource = [];

for (let i = 0; i < 100; i++) {
	dataSource.push({
		key: i,
		no: 'NO ' + i,
		description: '这是一段描述',
		callNo: Math.floor(Math.random() * 1000),
		status: Math.floor(Math.random() * 10) % 4,
		updatedAt: '2018-07-26'
	});
}
export default {
	data() {
		return {
			advanced: true,
			columns: columns,
			dataSource: dataSource,
			selectedRows: []
		};
	},
	methods: {
		callback(key) {
			console.log(key);
		}
	}
};
</script>
