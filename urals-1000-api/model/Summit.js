const mongoose = require('mongoose')
const summit = require('../schema/summit')

module.exports = mongoose.model('summit', summit)
