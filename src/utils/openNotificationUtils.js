import {notification} from 'antd';

const openNotificationWithIcon = (type) => {
	notification[type]({
		message: 'Notification Title',
		description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
	});
};

export  default  openNotificationWithIcon;
