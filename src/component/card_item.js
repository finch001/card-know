import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import moment from 'moment';

class CardItem extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<Card title="Card title" extra={<span>{moment().format('L')}</span>}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
		);
	}
}

export  default connect()(CardItem);

