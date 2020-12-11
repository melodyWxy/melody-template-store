import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from '@/store/index';
import zhCN from 'antd/es/locale/zh_CN';
import Layout from '@/components/Layout';
import '@/styles/normalize.less';
import '@/styles/global.less';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const App: FC = () => {
	return (
		<ConfigProvider locale={zhCN}>
			<Provider store={store}>
				<Layout />
			</Provider>
		</ConfigProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
