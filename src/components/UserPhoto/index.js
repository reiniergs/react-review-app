import React, { Component } from 'react';
import './user-photo.scss';

export default class UserPhoto extends Component {
	
	render() {
		return (
			<img src={this.props.photo} role='presentation' className='photo' />
		);
	}
}

UserPhoto.defaultProps = {
  	photo: 'img/user.png'
}