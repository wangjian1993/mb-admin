import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
// import PageView from '@/layouts/PageView'

// 路由配置
const options = {
	routes: [{
			path: '/login',
			name: '登录页',
			component: () => import('@/pages/login')
		},
		{
			path: '*',
			name: '404',
			component: () => import('@/pages/exception/404'),
		},
		{
			path: '/403',
			name: '403',
			component: () => import('@/pages/exception/403'),
		},
		{
			path: '/',
			name: '民爆',
			component: TabsView,
			redirect: '/login',
			children: [{
					path: 'home',
					name: '首页',
					meta: {
						icon: 'home'
					},
					component: BlankView,
					children: [{
							path: 'workplace',
							name: '工作台',
							component: () => import('@/pages/dashboard/workplace'),
							meta: {
								icon: 'appstore'
							}
						},
						{
							path: 'analysis',
							name: '分析页',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						},
						{
							path: 'purchase',
							name: '采购报价管理',
							meta: {
								icon: 'fund'
							},
							component: BlankView,
							children: [{
									path: 'purchase-add',
									name: '新建报价',
									component: () => import('@/pages/purchase/add'),
								},
								{
									path: 'purchase-list',
									name: '报价列表',
									component: () => import('@/pages/purchase/list')
								}
							]
						},
						{
							path: 'market',
							name: '销售报价管理',
							meta: {
								icon: 'fund'
							},
							component: BlankView,
							children: [{
									path: 'market-purchase',
									name: '新建销售采购',
									component: () => import('@/pages/market/market-add'),
								},
								{
									path: 'market-offer',
									name: '新建销售报价',
									component: () => import('@/pages/market/offer-add'),
								}
							]
						},
						{
							path: 'pmc',
							name: 'PMC管理',
							meta: {
								icon: 'fund'
							},
							component: BlankView,
							children: [{
									path: 'pmc-material-plan',
									name: '物料需求计划',
									component: () => import('@/pages/pmc/material-plan'),
								},
								{
									path: 'pmc-process-plan',
									name: '生产计划',
									component: () => import('@/pages/pmc/process-plan'),
								},
								{
									path: 'pmc-all-plan',
									name: '物料需求总计划',
									component: () => import('@/pages/pmc/all-plan'),
								}
							]
						}
					]
				},
				{
					path: 'report',
					name: 'BI报表',
					meta: {
						icon: 'money-collect'
					},
					component: BlankView,
					children: [{
						path: 'production',
						name: '车间生产排产情况',
						component: () => import('@/pages/bi/production'),
						meta: {
							icon: 'appstore'
						}
					}]
				},
				{
					path: 'mes',
					name: '生成MES',
					meta: {
						icon: 'tablet'
					},
					component: BlankView,
					children: [{
							path: 'workplace',
							name: '工作台',
							component: () => import('@/pages/dashboard/workplace'),
							meta: {
								icon: 'appstore'
							}
						},
						{
							path: 'analysis',
							name: '分析页',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						}
					]
				},
				{
					path: 'template',
					name: 'SRM门户',
					meta: {
						icon: 'tool',
					},
					component: BlankView,
					children: [{
							path: 'process',
							name: '流程图',
							component: () => import('@/pages/process/process'),
							meta: {
								icon: 'appstore'
							}
						},
						{
							path: 'form',
							name: '表单',
							meta: {
								icon: 'form',
							},
							component: BlankView,
							children: [{
									path: 'basic',
									name: '基础表单',
									component: () => import('@/pages/form/basic'),
								},
								{
									path: 'step',
									name: '分步表单',
									component: () => import('@/pages/form/step'),
								},
								{
									path: 'advance',
									name: '高级表单',
									component: () => import('@/pages/form/advance'),
								}
							]
						}, {
							path: 'list',
							name: '列表页',
							meta: {
								icon: 'table'
							},
							component: BlankView,
							children: [{
									path: 'query',
									name: '查询表格',
									meta: {
										authority: 'queryForm',
									},
									component: () => import('@/pages/list/QueryList'),
								},
								{
									path: 'primary',
									name: '标准列表',
									component: () => import('@/pages/list/StandardList'),
								},
								{
									path: 'card',
									name: '卡片列表',
									component: () => import('@/pages/list/CardList'),
								},
								{
									path: 'search',
									name: '搜索列表',
									component: () => import('@/pages/list/search/SearchLayout'),
									children: [{
											path: 'article',
											name: '文章',
											component: () => import(
												'@/pages/list/search/ArticleList'),
										},
										{
											path: 'application',
											name: '应用',
											component: () => import(
												'@/pages/list/search/ApplicationList'),
										},
										{
											path: 'project',
											name: '项目',
											component: () => import(
												'@/pages/list/search/ProjectList'),
										}
									]
								}
							]
						}
					]
				},
				{
					path: 'echarts',
					name: '后台管理',
					meta: {
						icon: 'pie-chart'
					},
					component: BlankView,
					children: [{
							path: 'institutions',
							name: '机构管理',
							meta: {
								icon: 'appstore'
							},
							component: BlankView,
							children: [{
									path: 'institutions-type',
									name: '机构类型',
									component: () => import('@/pages/admin/institutions/type'),
								},
								{
									path: 'institutions-list',
									name: '机构列表',
									component: () => import('@/pages/admin/institutions/list'),
								},
								{
									path: 'institutions-add',
									name: '添加机构',
									component: () => import('@/pages/admin/institutions/add'),
									meta:{
										invisible:true
									}
								}
							]
						},
						{
							path: 'organization',
							name: '组织管理',
							component: BlankView,
							meta: {
								icon: 'fund'
							},
							children: [{
									path: 'organization-list',
									name: '组织列表',
									component: () => import('@/pages/admin/organization/list'),
								}
							]
						},
						{
							path: 'analysis',
							name: '用户管理',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						},
						{
							path: 'analysis',
							name: '权限管理',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						},
						{
							path: 'analysis',
							name: '门户管理',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						},
						{
							path: 'analysis',
							name: '菜单管理',
							component: () => import('@/pages/dashboard/analysis'),
							meta: {
								icon: 'fund'
							}
						}
					]
				}
			]
		},
	]
}

export default options
