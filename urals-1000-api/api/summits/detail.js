const mongoose = require('mongoose')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const summit = await Summit.findOne({
    _id: mongoose.Types.ObjectId.createFromHexString(req.params.id)
  })
  res.json(summit)
}
