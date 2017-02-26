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
            <div>
                <div className="reviews">
                    <h1>Reviews</h1>
                    <p>See what our users have been saying.</p>
                </div>
                { this.renderReviews() }
                <Form onNewReview={ this.addReview } />
            </div>
        );
    }

    renderReviews() {
        const { reviews } = this.state;
        return reviews.map(rev => {
            return <UserBox name={ rev.title } comment={ rev.comment } photo={ rev.avatar } />
        })
    }
}
