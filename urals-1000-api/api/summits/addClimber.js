const mongoose = require('mongoose')
const Summit = require('../../model/Summit')
const User = require('../../model/user')
const omit = require('lodash/omit')

const DEFAULT_CLIMBER_AVATAR = {
  "url" : "http://1000.southural.ru/static/climber_sm.png",
  "width" : 50,
  "height" : 50
}

module.exports = async (req, res) => {
  const user = await User.findOne({
    _id: req.user._id
  })
  await user.incrClimbings()
  const summit = await Summit.findOne({
    _id: mongoose.Types.ObjectId.createFromHexString(req.params.id)
  })
  const { imageUrls } = req.body
  imageUrls.forEach(imageUrl => {
    summit.images.push({
      url: imageUrl
    })
  })
  summit.climbers.push({
    ...omit(req.body, ['imageUrls']),
    avatar: DEFAULT_CLIMBER_AVATAR
  })
  await summit.save()
  res.json(summit)
}
