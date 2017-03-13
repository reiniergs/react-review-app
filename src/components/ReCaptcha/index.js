import React, { Component } from 'react';
import './recaptcha.scss';

export default class ReCaptcha extends Component {

	render() {
		return <div className="g-recaptcha" 
			data-sitekey={this.props.sitekey} ></div>
	}
}