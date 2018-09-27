const User = require('../../model/User')

module.exports = async (req, res) => {
  const _id = req.params.id
  const user = await User.findOne({ _id })
  Object.assign(user, req.body)
  await user.save()
  await user.populateClimbs({ withSummit: true })
  res.json(user)
}
