/**
 * 侧边栏菜单配置项
 */
export default [
	{
		catalogKey: 'menu1',
		catalogName: '菜单 1',
		catalogRoute: null,
		catalogList: [
			{
				catalogKey: 'menu1-1',
				catalogName: '菜单 1-1',
				catalogRoute: null,
				catalogList: [
					{
						catalogKey: 'menu1-1-1',
						catalogName: '菜单 1-1-1',
						catalogRoute: '/menu/pid',
						catalogList: [],
					},
					{
						catalogKey: 'menu1-1-2',
						catalogName: '菜单 1-1-2',
						catalogRoute: null,
						catalogList: [
							{
								catalogKey: 'menu1-1-2-1',
								catalogName: '菜单 1-1-2-1',
								catalogRoute: '/menu/detail',
								moduleKey: 'iot',
								catalogList: [],
							},
						],
					},
				],
			},
		],
	},
	{
		catalogKey: 'menu2',
		catalogName: '菜单 2',
		catalogRoute: '/',
		catalogList: [],
	},
	{
		catalogKey: 'menu3',
		catalogName: '菜单 3',
		catalogRoute: null,
		catalogList: [
			{
				catalogKey: 'menu3-1',
				catalogName: '菜单 3-1',
				catalogRoute: '/xxxxx/xxxxx',
				catalogList: [],
			},
		],
	},
];
