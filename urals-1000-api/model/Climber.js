const mongoose = require('mongoose')
const climber = require('../schema/climber')

module.exports = mongoose.model('climber', climber)
