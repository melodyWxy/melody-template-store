import React from 'react';
import { Layout } from 'antd';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from '@/pages/404';
import routes from '../../routes';
import lazyLoadComponent from '@/utils/lazyLoad';
import Header from './Header';
import Content from './Content';
import Sider from './Sider';
import styles from './index.less';

interface RouteProps {
	link: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: () => any;
	headerVisible?: boolean;
	siderVisible?: boolean;
}

const BgLayout = () => {
	const style = { height: 'calc(100vh - 64px)' };
	return (
		<Router>
			<Switch>
				{routes.map((item: RouteProps) => {
					const { link, component, headerVisible = true, siderVisible = true } = item;
					return (
						<Route
							key={link}
							path={link}
							render={(props) => {
								const Component = lazyLoadComponent(component);
								return (
									<Layout>
										<div
											className={classnames({
												[styles.hidden]: !headerVisible,
												[styles['header-wrapper']]: true,
											})}
										>
											<Header {...props} />
										</div>
										<Layout style={style}>
											<div
												className={classnames({
													[styles.hidden]: !siderVisible,
													[styles['sider-wrapper']]: true,
												})}
											>
												<Sider {...props} />
											</div>
											<Layout>
												<Content {...props}>{<Component />}</Content>
											</Layout>
										</Layout>
									</Layout>
								);
							}}
							exact
						/>
					);
				})}
				<Route component={PageNotFound} />
			</Switch>
		</Router>
	);
};

export default BgLayout;
