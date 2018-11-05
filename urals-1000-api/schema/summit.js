const mongoose = require('mongoose')
const Summit = require('../model/Summit')

const summit = new mongoose.Schema({
  name: String,
  height: Number,
  ridge: String,
  climbs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'climb'
  }],
  coords: [Number],
  images: [{
    width: Number,
    height: Number,
    url: String,
    alt: String
  }]
})

module.exports = summit
