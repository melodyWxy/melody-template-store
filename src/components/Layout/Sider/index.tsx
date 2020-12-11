import React, { useState, useEffect, FC } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import menus from './menus';

const { Sider } = Layout;
const { SubMenu } = Menu;

interface MenuItemProps {
	catalogKey: string;
	catalogName: string;
	catalogRoute?: string;
	catalogList?: MenuItemProps[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[propName: string]: any;
}

const BgSider: FC<RouteComponentProps> = ({ location: { pathname } }) => {
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

	useEffect(() => {
		getSelectedKeyPath(menus as MenuItemProps[], pathname, (paths) => {
			if (Array.isArray(paths) && paths.length > 0) {
				setSelectedKeys([paths.pop()]);
				setOpenKeys(paths);
			}
		});
	}, []);

	// 获取指定节点的路径
	const getSelectedKeyPath = (menus: MenuItemProps[], pathname: string, callback) => {
		const paths: string[] = [];
		try {
			const getNodePath = (nodes: MenuItemProps[]) => {
				for (let i = 0; i < nodes.length; i++) {
					const node: MenuItemProps = nodes[i];
					paths.push(node.catalogKey);
					if (node?.catalogRoute === pathname) {
						throw new Error('get node');
					}
					if (Array.isArray(node.catalogList) && node.catalogList.length > 0) {
						getNodePath(node.catalogList);
						paths.pop();
					} else {
						paths.pop();
					}
				}
			};
			getNodePath(menus);
		} catch (err) {
			callback(paths);
		}
	};

	// 菜单展开-收起
	const onOpenChange = (openKeys) => {
		setOpenKeys(openKeys);
	};

	// 选中菜单
	const onSelect = (menus) => {
		setSelectedKeys(menus.selectedKeys);
	};

	const renderMenus = (menus: MenuItemProps[]) => {
		return menus.map((menu: MenuItemProps) => {
			if (
				!(Array.isArray(menu.catalogList) && menu.catalogList.length > 0) &&
				!menu?.catalogRoute
			) {
				// eslint-disable-next-line no-console
				console.error(`菜单 ${menu.catalogName} 路由不存在!`);
			}
			if (Array.isArray(menu.catalogList) && menu.catalogList.length > 0) {
				return (
					<SubMenu key={menu.catalogKey} title={menu.catalogName}>
						{renderMenus(menu.catalogList || [])}
					</SubMenu>
				);
			}
			return (
				<Menu.Item key={menu.catalogKey}>
					<Link to={menu?.catalogRoute || ''}>{menu.catalogName}</Link>
				</Menu.Item>
			);
		});
	};
	const style = { height: '100%', borderRight: 0 };
	return (
		<Sider width={200}>
			<Menu
				mode="inline"
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				style={style}
				onOpenChange={onOpenChange}
				onSelect={onSelect}
			>
				{renderMenus(menus as MenuItemProps[])}
			</Menu>
		</Sider>
	);
};

export default withRouter(BgSider);
