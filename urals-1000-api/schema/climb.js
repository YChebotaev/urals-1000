const mongoose = require('mongoose')

const climb = new mongoose.Schema({
  date: Date,
  comment: String,
  user: {
    type: String,
    ref: 'users'
  },
  summit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'summits'
  }
})

module.exports = climb
