import React, { Component } from 'react';

export default class UserName extends Component {
	
	render() {
		return (
			<h2> { this.props.name } </h2>
		);
	}
}