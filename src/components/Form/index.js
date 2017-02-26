import React, { Component, PropTypes } from 'react';
import './form.scss';
import axios from 'axios';

const initialState = { title: '', email: '', comment: '' };

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      	const { name, value } = event.target; 
        this.setState({
        	[name]: value
        });
    }

    handleSubmit(event) {
        const { title, comment, email } = this.state;
        const { onNewReview } = this.props;
        event.preventDefault();
      	axios.post('/review', { title, comment, email})
            .then(response => {
                if (typeof onNewReview === 'function') {
                    onNewReview(response.data);
                    this.setState(initialState);
                }
            })
    }

    render() {
        const { title, email, comment } = this.state;
        return (
            <form onSubmit={ this.handleSubmit }>
              	<h3>POST REVIEW</h3>
              	<input type='text' className='left-input' name='title' placeholder='Your Name' value={ title } onChange={ this.handleChange } />
              	<input type='email' className='right-input' name='email' placeholder='Your Email' value={ email } onChange={ this.handleChange } />
                <textarea name='comment' placeholder='Your Message' value={ comment } onChange={ this.handleChange } ></textarea>
                <input type='submit' className='submit-button' value='SEND' />
            </form>
        );
    }
}