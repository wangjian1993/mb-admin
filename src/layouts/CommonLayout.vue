<template>
	<div class="common-layout">
		<div class="content"><slot></slot></div>
		<!-- <page-footer :link-list="footerLinks" :copyright="copyright"></page-footer> -->
	</div>
</template>

<script>
// import PageFooter from '@/layouts/footer/PageFooter'
import { mapState } from 'vuex';

export default {
	name: 'CommonLayout',
	computed: {
		...mapState('setting', ['footerLinks', 'copyright'])
	}
};
</script>

<style scoped lang="less">
.common-layout {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100vh;
	overflow: auto;
	background-color: @layout-body-background;
	background-image: url(../assets/img/bg.png);
	background-repeat: no-repeat;
	background-position-x: center;
	// background-position-y: 110px;
	background-size: 100% 100%;
	position: relative;
	.content {
		width: 73vw;
		height: 42vw;
		background: url(../assets/img/loginbg.png)no-repeat;
		background-size: 100%;
		display: flex;
		justify-content: flex-end;
		padding: 0 2vw;
	}
}
</style>
