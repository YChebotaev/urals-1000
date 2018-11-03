const User = require('../../model/User')
const populate = require('../../lib/populate2')
const Climb = require('../../model/Climb')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const user = await User.findOne({
    _id: req.user._id
  })
  await populate(user, 'climbs')
  await Promise.all(
    user.climbs.map(
      climb => populate(climb, 'summit')
    )
  )
  res.json(user)
}
