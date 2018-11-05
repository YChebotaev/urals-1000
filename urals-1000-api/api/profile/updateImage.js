const User = require('../../model/User')
const populate = require('../../lib/populate2')

module.exports = async (req, res) => {
  const _id = req.params.id
  const { imageUrl } = req.body
  const user = await User.findOne({ _id })
  user.avatar = {
    url: imageUrl
  }
  await user.save()
  await populate(user, 'climbs')
  // With summits
  await Promise.all(
    user.climbs.map(
      climb => populate(climb, 'summit')
    )
  )
  res.json(user)
}
