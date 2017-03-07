import React, { Component } from 'react';
import './user-photo.scss';

export default class UserPhoto extends Component {
	
	render() {
		return (
			<a href="javascript:void(0);" title={ this.props.name } className="slds-avatar slds-avatar--circle slds-avatar--large">
        		<img src={ this.props.photo } role="presentation" />
      		</a>
		);
	}
}

UserPhoto.defaultProps = {
  	photo: 'images/avatar1.jpg'
}