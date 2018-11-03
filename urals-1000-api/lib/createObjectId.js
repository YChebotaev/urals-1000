const mongoose = require('mongoose')

module.exports = objectIdString =>
  mongoose.Types.ObjectId.createFromHexString(objectIdString)
