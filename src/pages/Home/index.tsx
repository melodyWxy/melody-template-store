import React, { FC } from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

const Home: FC = () => {
	const onChange = (date) => {
		// eslint-disable-next-line no-console
		console.log(dayjs(date).format('YYYY-MM-DD HH:mm:ss'));
	};
	return (
		<div>
			<DatePicker onChange={onChange} />
		</div>
	);
};

export default Home;
