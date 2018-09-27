const User = require('../../model/User')
const Climb = require('../../model/Climb')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const { _id } = req.user
  const user = (await User.findOne({ _id })).toObject()
  user.climbs = await Promise.all(
    user.climbs.map(async climbId => {
      const climb = (await Climb.findOne({
        _id: climbId
      })).toObject()
      climb.summit = await Summit.findOne({
        _id: climb.summit
      })
      return climb
    })
  )
  res.json(user)
}
