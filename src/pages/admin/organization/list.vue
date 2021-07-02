<template>
	<div>
		<a-row>
			<a-col style="padding: 0 5px" :span="5">
				<a-card class="card" :bordered="false" :bodyStyle="{ padding: '5px' }">
					<div class="left-list">
						<p>
							<a-icon type="android" />
							<span>组织1</span>
						</p>
						<p>
							<a-icon type="android" />
							<span>组织2</span>
						</p>
						<p>
							<a-icon type="android" />
							<span>组织3</span>
						</p>
					</div>
				</a-card>
			</a-col>
			<a-col :span="14">
				<a-card class="card" :bordered="false" :bodyStyle="{ padding: '5px' }">
					<div>
						<a-row type="flex" justify="start">
							<a-col :span="2"><a-button @click="goAdd()" type="primary" icon="form">添加</a-button></a-col>
						</a-row>
					</div>
				</a-card>
			</a-col>
			<a-col style="padding: 0 5px" :span="5"><a-card class="card" :bordered="false" :bodyStyle="{ padding: '5px' }">3</a-card></a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {}
};
</script>

<style lang="less" scoped>
.left-list {
	padding: 10px 20px;
	text-align: center;
	p {
		font-size: 12px;
		color: @title-color;
		span {
			padding-left: 10px;
			&:hover {
				// color: @theme-color;
				// background: @theme-color;
				cursor: pointer;
			}
		}
	}
}
</style>
