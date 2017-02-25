import React, { Component, PropTypes } from 'react';
import UserBox from '../UserBox';
import Form from '../Form';
import './app-reviews.scss';
var axios = require('axios');

export default class AppReviews extends Component {
 constructor(props) {
  super(props);
  this.state = {
    reviews: []
  }
  this.addReview = this.addReview.bind(this);
 }

 componentDidMount() {
  axios.get('/review')
    .then(response => this.setState({
      reviews: response.data
    }))
 }

  render() {
    return (
      <div>
        <div className='reviews'>
          <h1>Reviews</h1>
          <p>See what our users have been saying.</p>
        </div>
        { this.renderReviews() }
        {/* notice the funciton addReview is pass as a reference */}
        <Form onNewReview={ this.addReview }/>
      </div>
    );
  }

  renderReviews() {
    const { reviews } = this.state;
    return reviews.map(rev => {
      return <UserBox name={ rev.title } comment={ rev.comment } photo={ rev.avatar } />
    })
  }

  addReview(review) {
    const {reviews} = this.state;
    reviews.push(review);
    this.setState({ reviews: reviews });
  }
}
