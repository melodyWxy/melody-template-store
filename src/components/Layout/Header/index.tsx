import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import styles from './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const { Header } = Layout;

type HeaderProps = {} & RouteComponentProps;

const BgHeader = (props: HeaderProps) => {
	const { history } = props;
	const [userInfo] = useState({ nick: '**' });

	useEffect(() => {
		getUserInfo();
	}, []);

	const linkToHomePage = () => {
		history.push('/');
	};

	const getUserInfo = async () => {
		// TODO: 业务方提供获取登录信息的接口
	};

	return (
		<Header>
			<div className={`${styles['header-wrapper']} flex-around-center`}>
				<div className={`${styles['logo']} flex-start-center`} onClick={linkToHomePage}>
					<img src="//static1.tuyacn.com/static/smarthome/img/static/common/logo/9910hfDKE4qF.png" />
					<span className={styles['platform-name']}>react-cli</span>
				</div>
				<div>{userInfo.nick}</div>
			</div>
		</Header>
	);
};

export default withRouter(BgHeader);
