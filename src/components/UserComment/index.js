import React, { Component } from 'react';

export default class UserComment extends Component {
	
	render() {
		return (
			<p> { this.props.comment } </p>
		);
	}
}