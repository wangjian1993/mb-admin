<template>
	<a-card class="card" :bordered="false" :bodyStyle="{padding:'15px'}">
		<div>
			<a-row type="flex" justify="end">
				<a-col :span="2"><a-button type="primary" icon="search">提交</a-button></a-col>
				<a-col :span="2"><a-button type="primary" icon="search">保存</a-button></a-col>
				<a-col :span="2"><a-button type="primary" icon="search">导出</a-button></a-col>
			</a-row>
		</div>
		<a-tabs type="card" @change="callback">
			<a-tab-pane key="1" tab="报价申请">
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
			<a-tab-pane key="2" tab="销售报价">
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
			<a-tab-pane key="3" tab="关联BOM">
				<a-form layout="horizontal">
					<div class="">
						<a-row>
							<a-col :md="8" :sm="24">
								<a-form-item label="产品品号" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-input placeholder="请输入" v-decorator="['username', { rules: [{ required: true, message: 'Please input your name' }] }]" />
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="产品大类" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-select placeholder="请选择">
										<a-select-option value="1">关闭</a-select-option>
										<a-select-option value="2">运行中</a-select-option>
									</a-select>
								</a-form-item>
							</a-col>
							<a-col :md="8" :sm="24">
								<a-form-item label="产品型号" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
									<a-input placeholder="请输入" v-decorator="['username', { rules: [{ required: true, message: 'Please input your name' }] }]" />
								</a-form-item>
							</a-col>
						</a-row>
						<a-row v-if="advanced">
							<a-col :md="8" :sm="24">
								<a-form-item label="产品规格" :labelCol="{ span: 5 }" :wrapperCol="{ span: 18, offset: 1 }">
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
						</a-row>
					</div>
				</a-form>
				<div><a-table :columns="columns" :data-source="data"></a-table></div>
			</a-tab-pane>
			<a-tab-pane key="4" tab="产品图片"></a-tab-pane>
		</a-tabs>
	</a-card>
</template>
<script>
const columns = [
	{
		title: '图片类型',
		dataIndex: '1',
		key: '1'
	},
	{
		title: '产品图',
		dataIndex: '2',
		key: '2'
	},
	{
		title: '图片上传',
		key: '3',
		dataIndex: '3'
	},
	{
		title: '图片预览',
		key: '4',
		dataIndex: '4'
	}
];
export default {
	data() {
		return {
			advanced: true,
			columns
		};
	},
	methods: {
		callback(key) {
			console.log(key);
		}
	}
};
</script>
