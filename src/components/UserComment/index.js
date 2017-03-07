import React, { Component } from 'react';
import './user-comment.scss';

export default class UserComment extends Component {
	
	render() {
		return (
			<p> { this.props.comment } </p>
		);
	}
}