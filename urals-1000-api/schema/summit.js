const mongoose = require('mongoose')
const climber = require('./climber')

module.exports = new mongoose.Schema({
  name: String,
  height: Number,
  ridge: String,
  climbers: [climber],
  coords: [Number],
  images: [{
    width: Number,
    height: Number,
    url: String,
    alt: String
  }]
})
