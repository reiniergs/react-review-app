import React, { Component } from 'react';
import './user-comment.scss';

export default class UserComment extends Component {
	
	render() {
		return (
			<p className="comment"> { this.props.comment } </p>
		);
	}
}