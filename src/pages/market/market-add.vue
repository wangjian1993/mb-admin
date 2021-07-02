<template>
	<a-card class="card" :bordered="false" :bodyStyle="{padding:'5px'}">
		<div>
			<a-row type="flex" justify="end">
				<a-col :span="2"><a-button type="primary" icon="search">提交</a-button></a-col>
				<a-col :span="2"><a-button type="primary" icon="search">保存</a-button></a-col>
				<a-col :span="2"><a-button type="primary" icon="search">导出</a-button></a-col>
			</a-row>
		</div>
		<a-tabs type="card" @change="callback">
			<a-tab-pane key="1" tab="成本报价">
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
			<a-tab-pane key="3" tab="产品图片">
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
				<div>
					<a-table :columns="columns" :data-source="data">
						<span slot="action">
							<a-upload
								name="avatar"
								list-type="picture-card"
								class="avatar-uploader"
								:show-upload-list="false"
								action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
								:before-upload="beforeUpload"
								@change="handleChange"
							>
								<img v-if="imageUrl" :src="imageUrl" alt="avatar" />
								<div v-else>
									<a-icon :type="loading ? 'loading' : 'plus'" />
									<div class="ant-upload-text">Upload</div>
								</div>
							</a-upload>
						</span>
						<span slot="iamge"><img src="../../assets/img/logo.png" /></span>
					</a-table>
				</div>
			</a-tab-pane>
		</a-tabs>
	</a-card>
</template>
<script>
const columns = [
	{
		title: '图片类型',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '产品图',
		dataIndex: 'product',
		key: 'product'
	},
	{
		title: '图片上传',
		dataIndex: 'address',
		key: 'address 1',
		scopedSlots: { customRender: 'action' }
	},
	{
		title: '图片预览',
		dataIndex: 'image',
		key: 'image',
		scopedSlots: { customRender: 'image' }
	}
];
const data = [
	{
		name: '主图',
		product: '产品图',
		image: ''
	}
];
export default {
	data() {
		return {
			advanced: true,
			columns,
			data
		};
	},
	methods: {
		callback(key) {
			console.log(key);
		}
	}
};
</script>
