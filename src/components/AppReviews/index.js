import React, { Component, PropTypes } from 'react';
import UserBox from '../UserBox';
import Form from '../Form';
import './app-reviews.scss';
import axios from 'axios';

export default class AppReviews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }

        this.addReview = this.addReview.bind(this);
    }

    componentDidMount() {
        axios.get('/reviews')
            .then(response => this.setState({
                reviews: response.data
            }))
    }


    addReview(review) {
        const { reviews } = this.state;
        reviews.push(review);
        this.setState({ reviews: reviews });
    }

    render() {
        return (
            <div className="slds-container--large slds-container--center slds-m-vertical--xx-large">
                <h1 className="slds-text-heading--large slds-m-bottom--x-large">Your Opinion</h1>
                { this.renderReviews() }
                <Form onNewReview={ this.addReview } />
            </div>
        );
    }

    renderReviews() {
        const { reviews } = this.state;
        //The toString() use is to return a true or false value, because an array is always true
        if (reviews.toString()) {
            return reviews.map(rev => {
                return <UserBox name={ rev.title } comment={ rev.comment } photo={ rev.avatar } date={ rev.createdAt } />
            })
        } else {
            //It's not finished. Only to show something when there is not reviews to show
            return <h1 className="no-reviews">No reviews to show</h1>
        }
    }
}
