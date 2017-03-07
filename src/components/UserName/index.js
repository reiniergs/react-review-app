import React, { Component } from 'react';

export default class UserName extends Component {
	
	render() {
		return (
			<p><a href="javascript:void(0);" title={ this.props.name }> { this.props.name } </a></p>
		);
	}
}