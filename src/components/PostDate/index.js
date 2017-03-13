import React, { Component } from 'react';

export default class PostDate extends Component {
	
	render() {
		let { date } = this.props;
		date = new Date(date);
		date = date.toString();
		date = date.split(' ', 4);
		let month = date[1];
		let day = date[2];
		let year = date[3];
		date = month + ' ' + day + ',' + ' ' + year;
		return <p className="slds-text-body--small"><a href="javascript:void(0);" className="slds-text-link--reset"> { date } </a></p>
	}
}