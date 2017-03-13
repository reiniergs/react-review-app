import React, { Component } from 'react';
import './render-valuation.scss';

export default class RenderValuation extends Component {

	render() {
		const { valuation } = this.props; 
		let elementsArray = [
			<svg key="1" style={{fill: ""}} className="slds-button__icon--large rendered-stars" aria-hidden="true">
				<use xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
			</svg>,
			<svg key="2" style={{fill: ""}} className="slds-button__icon--large rendered-stars" aria-hidden="true">
		    	<use xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
		  	</svg>,
		  	<svg key="3" style={{fill: ""}} className="slds-button__icon--large rendered-stars" aria-hidden="true">
		    	<use xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
		  	</svg>,
		  	<svg key="4" style={{fill: ""}} className="slds-button__icon--large rendered-stars" aria-hidden="true">
		    	<use xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
		  	</svg>,
		  	<svg key="5" style={{fill: ""}} className="slds-button__icon--large rendered-stars" aria-hidden="true">
		    	<use xlinkHref="../icons/custom-sprite/svg/symbols.svg#custom11"></use>
		  	</svg>
		]
		
		switch (valuation) {
			case "1":
				elementsArray[0].props.style.fill = '#ff9a3c';
				return <div className="star-box">{elementsArray}</div>
				break;
			case "2":
				elementsArray[0].props.style.fill = '#ff9a3c';
				elementsArray[1].props.style.fill = '#ff9a3c';
				return <div className="star-box">{elementsArray}</div>
				break;
			case "3":
				elementsArray[0].props.style.fill = '#ff9a3c';
				elementsArray[1].props.style.fill = '#ff9a3c';
				elementsArray[2].props.style.fill = '#ff9a3c';
				return <div className="star-box">{elementsArray}</div>
				break;
			case "4":
				elementsArray[0].props.style.fill = '#ff9a3c';
				elementsArray[1].props.style.fill = '#ff9a3c';
				elementsArray[2].props.style.fill = '#ff9a3c';
				elementsArray[3].props.style.fill = '#ff9a3c';
				return <div className="star-box">{elementsArray}</div>
				break;
			case "5":
				elementsArray[0].props.style.fill = '#ff9a3c';
				elementsArray[1].props.style.fill = '#ff9a3c';
				elementsArray[2].props.style.fill = '#ff9a3c';
				elementsArray[3].props.style.fill = '#ff9a3c';
				elementsArray[4].props.style.fill = '#ff9a3c';
				return <div className="star-box">{elementsArray}</div>
				break;

			default:
				return <div className="star-box">{elementsArray}</div>
				break;
		}
		
	}
}