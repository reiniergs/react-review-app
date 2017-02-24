import React, { Component, PropTypes } from 'react';
import './form.scss';
var axios = require('axios');

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: '',
    	email: '',
    	comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  	const { name, value} = event.target 
    this.setState({
    	[name]: value
    });
  }

  handleSubmit(event) {
  	axios.post('/review', {
  		title: this.state.title,
  		comment: this.state.comment,
  		email: this.state.email
  	})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      	<h3>POST REVIEW</h3>
      	<input type='text' className='left-input' name='title' placeholder='Your Name' value={this.state.title} onChange={this.handleChange} />
      	<input type='email' className='right-input' name='email' placeholder='Your Email' value={this.state.email} onChange={this.handleChange} />
      	<textarea name='comment' placeholder='Your Message' value={this.state.comment} onChange={this.handleChange} ></textarea>
        <input type='submit' className='submit-button' value='SEND' />
      </form>
    );
  }
}