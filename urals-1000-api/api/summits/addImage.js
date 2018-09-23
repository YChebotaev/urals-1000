const mongoose = require('mongoose')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  console.log('req.body', req.body)
  const summit = await Summit.findOne({
    _id: mongoose.Types.ObjectId.createFromHexString(req.params.id)
  })
  summit.images.push({
    url: req.body.imageUrl
  })
  await summit.save()
  res.json(summit)
}
