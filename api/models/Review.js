module.exports = {
  attributes: {
      title: {
          type: 'string',
          required: true
      },
      email: {
          type: 'email',
          required: true
      },
      comment: {
          type: 'string',
          required: true
      },
      avatar: {
          type: 'string'
      },
      toJSON: function () {
          return this.toObject();
      }
  }
}
