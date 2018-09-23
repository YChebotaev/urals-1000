const mongoose = require('mongoose')

module.exports = new mongoose.Schema({
  name: String,
  date: Date,
  comment: String,
  climbings: Number,
  avatar: {
    width: Number,
    height: Number,
    url: String
  }
})
