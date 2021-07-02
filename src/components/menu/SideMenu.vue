<template>
	<a-layout-sider
		:theme="sideTheme"
		:class="['side-menu', 'beauty-scroll', isMobile ? null : 'shadow']"
		:width="sideWidth"
		:collapsible="collapsible"
		v-model="collapsed"
		:trigger="null"
		collapsedWidth="70px"
	>
		<div :class="['logo', theme]">
			<router-link to="/home/workplace">
				<img src="../../assets/img/upshine-logo.png" />
				<h1>民爆平台</h1>
			</router-link>
		</div>
		<i-menu :theme="theme" :collapsed="collapsed" :options="menuData" @select="onSelect" class="menu" />
	</a-layout-sider>
</template>

<script>
import IMenu from './menu';
import { mapState } from 'vuex';
export default {
	name: 'SideMenu',
	components: { IMenu },
	props: {
		collapsible: {
			type: Boolean,
			required: false,
			default: false
		},
		collapsed: {
			type: Boolean,
			required: false,
			default: false
		},
		menuData: {
			type: Array,
			required: true
		},
		theme: {
			type: String,
			required: false,
			default: 'dark'
		},
		sideWidth: {
			type: String,
			required: false,
		}
	},
	computed: {
		sideTheme() {
			return this.theme == 'light' ? this.theme : 'dark';
		},
		...mapState('setting', ['isMobile', 'systemName'])
	},
	methods: {
		onSelect(obj) {
			this.$emit('menuSelect', obj);
		}
	}
};
</script>

<style lang="less" scoped>
@import 'index';
</style>
