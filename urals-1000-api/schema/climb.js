const mongoose = require('mongoose')

const climb = new mongoose.Schema({
  date: Date,
  comment: String,
  user: {
    type: String,
    ref: 'user'
  },
  summit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'summit'
  }
})

module.exports = climb
