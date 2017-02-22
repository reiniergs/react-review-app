module.exports = {
    getReviews: function (req, res) {
        Review.find({}).exec((err, reviews) => {
            if (err) return res.serverError(err);
            return res.send(reviews);
        })
    },
    createReview: function (req, res) {
        const { email, title, comment, avatar } = req.body;
        Review.create(review).exec(err => {
            if (err) return res.serverError(err);
            return res.send({
                message: 'The review has been created crrectly.',
                review
            })
        })
    }
}
