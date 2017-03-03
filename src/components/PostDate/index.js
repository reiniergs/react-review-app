import React, { Component } from 'react';
import './post-date.scss';

export default class PostDate extends Component {
	render() {
		return <p className="slds-text-body--small"><a href="javascript:void(0);" className="slds-text-link--reset"> { this.props.date } </a></p>
	}
}