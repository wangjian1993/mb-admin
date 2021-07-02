<template>
	<a-card class="card" :bordered="false" :bodyStyle="{ padding: '5px' }">
		<div>
			<a-row type="flex" justify="start">
				<a-col :span="2"><a-button @click="goAdd()" type="primary" icon="form">添加</a-button></a-col>
			</a-row>
		</div>
		<div class="tab">
			<a-table :columns="columns" :data-source="data" size="small" bordered>
				<template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record">
					<div :key="col">
						<a-input v-if="record.editable" style="margin: -5px 0" :value="text" @change="e => handleChange(e.target.value, record.key, col)" />
						<template v-else>
							{{ text }}
						</template>
					</div>
				</template>
				<template slot="operation">
					<div>
						<a style="margin-right: 8px">
							<a-icon type="plus" />
							新增
						</a>
						<a style="margin-right: 8px">
							<a-icon type="edit" />
							编辑
						</a>
					</div>
				</template>
			</a-table>
		</div>
	</a-card>
</template>
<script>
const columns = [
	{
		title: '类型编码',
		dataIndex: 'name',
		width: '25%',
		scopedSlots: { customRender: 'name' },
		align:"center"
	},
	{
		title: '类型名称',
		dataIndex: 'age',
		width: '15%',
		scopedSlots: { customRender: 'age' },
		align:"center"
	},
	{
		title: '是否启用',
		dataIndex: 'address',
		width: '40%',
		scopedSlots: { customRender: 'address' },
		align:"center"
	},
	{
		title: '默认',
		dataIndex: 'operation',
		scopedSlots: { customRender: 'operation' },
		align:"center"
	}
];

const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i.toString(),
		name: `Edrward ${i}`,
		age: 32,
		address: `London Park no. ${i}`
	});
}
export default {
	data() {
		this.cacheData = data.map(item => ({ ...item }));
		return {
			data,
			columns,
			editingKey: ''
		};
	},
	methods: {
		goAdd(){
			this.$router.push("institutions-add")
		},
		handleChange(value, key, column) {
			const newData = [...this.data];
			const target = newData.filter(item => key === item.key)[0];
			if (target) {
				target[column] = value;
				this.data = newData;
			}
		},
		edit(key) {
			const newData = [...this.data];
			const target = newData.filter(item => key === item.key)[0];
			this.editingKey = key;
			if (target) {
				target.editable = true;
				this.data = newData;
			}
		},
		save(key) {
			const newData = [...this.data];
			const newCacheData = [...this.cacheData];
			const target = newData.filter(item => key === item.key)[0];
			const targetCache = newCacheData.filter(item => key === item.key)[0];
			if (target && targetCache) {
				delete target.editable;
				this.data = newData;
				Object.assign(targetCache, target);
				this.cacheData = newCacheData;
			}
			this.editingKey = '';
		},
		cancel(key) {
			const newData = [...this.data];
			const target = newData.filter(item => key === item.key)[0];
			this.editingKey = '';
			if (target) {
				Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
				delete target.editable;
				this.data = newData;
			}
		}
	}
};
</script>
