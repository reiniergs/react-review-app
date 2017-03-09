import React, { Component, PropTypes } from 'react';
import './form.scss';
import Valuation from '../Valuation';
import axios from 'axios';

const initialState = { title: '', email: '', comment: '', valuation: '' };

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addValuation = this.addValuation.bind(this);
    }

    handleChange(event) {
      	const { name, value } = event.target; 
        this.setState({
        	[name]: value
        });
    }

    handleSubmit(event) {
        const { title, comment, email, valuation } = this.state;
        const { onNewReview } = this.props;
        event.preventDefault();
      	axios.post('/review', { title, comment, email, valuation})
            .then(response => {
                if (typeof onNewReview === 'function') {
                    onNewReview(response.data);
                    this.setState(initialState);
                }
            })
    }

    addValuation(valuation) {
        this.setState({valuation: valuation});
    }

    render() {
        const { title, email, comment, valuation } = this.state;
        return (
            <form onSubmit={ this.handleSubmit }>
              	<h1 className="slds-text-heading--large slds-m-bottom--small">POST</h1>
                <fieldset className="slds-form--compound">
                    <div className="slds-form-element__group">
                        <div className="slds-form-element__row">
                            <div className="slds-form-element slds-size--1-of-2">
                                <label className="slds-form-element__label" htmlFor="text-input-01">Your Name</label>
                                <input type="text" name="title" id="text-input-01" className="slds-input" value={ title } onChange={ this.handleChange } />
                            </div>
                          	<div className="slds-form-element slds-size--1-of-2">
                                <label className="slds-form-element__label" htmlFor="text-input-02">Your Email</label>
                                <input type="email" name="email" id="text-input-0" className="slds-input" value={ email } onChange={ this.handleChange } />
                            </div>
                        </div>
                      	<div className="slds-form-element">
                            <label className="slds-form-element__label" htmlFor="textarea-input-01">Your Message</label>
                            <div className="slds-form-element__control">
                                <textarea name="comment" id="textarea-input-01" className="slds-textarea" value={ comment } onChange={ this.handleChange } ></textarea>
                            </div>
                        </div>
                        <div className="slds-m-top--medium">
                            <label className="slds-form-element__label">Your Valuation</label><br/>
                            <Valuation onNewValuation={ this.addValuation } />
                        </div>
                        <div className="g-recaptcha slds-float--right" data-sitekey="6LehsxcUAAAAAFGJqyqEmbPvUBtmy755NOuXJalz"></div>
                        <div className="submit-button slds-m-top--large">
                            <button type="submit" className="slds-button slds-button--brand">Send</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}