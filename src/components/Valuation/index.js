import React, { Component } from 'react';
import './valuation.scss';

export default class Valuation extends Component {
	constructor(props) {
        super(props);
        this.state = { valuation: '' };

        this.handleStarClick = this.handleStarClick.bind(this);
    }

    handleStarClick(event) {
    	event.preventDefault();
    	const { onNewValuation } = this.props;
    	const valuation = event.target.id;
    	this.setState({ valuation: valuation});
    	if (typeof onNewValuation === 'function') {
    		onNewValuation(valuation);
    	}
    }

	render() {
		return (
			<div className="stars-box">
				<button id="5" className="slds-button star-button last-star" onClick={this.handleStarClick} >
		  			<svg id="5" className="slds-button__icon--large" aria-hidden="true">
				    	<use id="5" xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
				  	</svg>
				  	<span className="slds-assistive-text">Valuation</span>
				</button>
				<button id="4" className="slds-button star-button" onClick={ this.handleStarClick } >
		  			<svg id="4" className="slds-button__icon--large" aria-hidden="true">
				    	<use id="4" xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
				  	</svg>
				  	<span className="slds-assistive-text">Valuation</span>
				</button>
				<button id="3" className="slds-button star-button" onClick={ this.handleStarClick } >
		  			<svg id="3" className="slds-button__icon--large" aria-hidden="true">
				    	<use id="3"  xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
				  	</svg>
				  	<span className="slds-assistive-text">Valuation</span>
				</button>
				<button id="2" className="slds-button star-button" onClick={ this.handleStarClick } >
		  			<svg id="2" className="slds-button__icon--large" aria-hidden="true">
				    	<use id="2"  xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
				  	</svg>
				  	<span className="slds-assistive-text">Valuation</span>
				</button>
				<button id="1" className="slds-button star-button" onClick={ this.handleStarClick } >
		  			<svg id="1" className="slds-button__icon--large" aria-hidden="true">
				    	<use id="1"  xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
				  	</svg>
				  	<span className="slds-assistive-text">Valuation</span>
				</button>
			</div>
		);
	}
}