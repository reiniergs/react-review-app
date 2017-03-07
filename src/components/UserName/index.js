import React, { Component } from 'react';
import './user-name.scss';

export default class UserName extends Component {
	
	render() {
		return (
			<p className="user-name"><a href="javascript:void(0);" title={ this.props.name }> { this.props.name } </a></p>
		);
	}
}