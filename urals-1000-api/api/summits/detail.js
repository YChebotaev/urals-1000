const mongoose = require('mongoose')
const Summit = require('../../model/Summit')
const Climb = require('../../model/Climb')
const User = require('../../model/User')
const populate = require('../../lib/populate')

module.exports = async (req, res) => {
  const summit = (await Summit.findOne({ _id: mongoose.Types.ObjectId.createFromHexString(req.params.id) })).toObject()
  await populate(Climb, summit, 'climbs')
  summit.climbs = await Promise.all(
    summit.climbs.map(async climb => populate(User, climb, 'user'))
  )
  res.json(summit)
}
