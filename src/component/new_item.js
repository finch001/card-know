import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewItem extends Component {
	constructor(props) {
		super(props);
	}
	
	
	render() {
		return (
			<div>
				NewItem
			</div>
		)
	}
}

export default connect()(NewItem) ;