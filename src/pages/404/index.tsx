import React, { FC } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const PageNotFound: FC<RouteComponentProps> = ({ history }) => {
	const linkToHomePage = () => {
		history.push('/');
	};
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<div className={styles['not-found-wrapper']}>
			<img
				src="https://images.tuyacn.com/rms-static/aea66160-d180-11ea-adc4-b9da6a747e43-1596016120438.png?tyName=not_found.png"
				alt="404"
			/>
			<p>对不起，您访问的页面已被删除或不存在</p>
			<div>
				<Button type="primary" onClick={linkToHomePage}>
					首页
				</Button>
				<Button className={styles['refresh-button']} onClick={refreshPage}>
					刷新
				</Button>
			</div>
		</div>
	);
};

export default withRouter(PageNotFound);
