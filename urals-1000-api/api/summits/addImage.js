const mongoose = require('mongoose')
const Summit = require('../../model/Summit')
const createObjectId = require('../../lib/createObjectId')

module.exports = async (req, res) => {
  const summit = await Summit.findOne({
    _id: createObjectId(req.params.id)
  })
  summit.images.push({
    url: req.body.imageUrl
  })
  await summit.save()
  res.json(summit)
}
