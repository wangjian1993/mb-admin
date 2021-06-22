<template>
	<a-card class="card" :bordered="false" :bodyStyle="{ padding: '15px' }">
		<div>
			<a-row type="flex" justify="start">
				<a-col :span="2"><a-button type="primary" icon="form">添加</a-button></a-col>
			</a-row>
		</div>
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
