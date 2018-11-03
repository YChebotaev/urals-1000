const mongoose = require('mongoose')
const Summit = require('../../model/Summit')
const createObjectId = require('../../lib/createObjectId')

module.exports = async (req, res) => {
  const summit = await Summit.findOne({
    _id: createObjectId(req.params.id)
  })

  const index = summit.images.findIndex(
    image => image.url === req.body.imageUrl
  )
  summit.images.splice(index, 1)

  await summit.save()
  res.json(summit)
}
