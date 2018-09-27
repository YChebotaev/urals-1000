const mongoose = require('mongoose')
const climb = require('../schema/climb')

module.exports = mongoose.model('climb', climb)
