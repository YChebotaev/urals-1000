const mongoose = require('mongoose')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const summit = await Summit.findOne({
    _id: mongoose.Types.ObjectId.createFromHexString(req.params.id)
  })
  for (let i=0; i<summit.images.length; i++) {
    const image = summit.images[i]
    if (image.url === req.body.imageUrl) {
      summit.images.splice(i, 1)
    }
  }
  await summit.save()
  res.json(summit)
}
