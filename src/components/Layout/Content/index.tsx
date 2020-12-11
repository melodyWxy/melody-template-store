import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';
const { Content } = Layout;

const BgContent = (props) => {
	return (
		<Content className={styles['content-wrapper']}>
			<div className={styles['main-content']}>{props.children}</div>
		</Content>
	);
};

export default BgContent;
