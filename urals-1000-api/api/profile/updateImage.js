const User = require('../../model/User')

module.exports = async (req, res) => {
  const _id = req.params.id
  const { imageUrl } = req.body
  const user = await User.findOne({ _id })
  user.avatar = {
    url: imageUrl
  }
  await user.save()
  await user.populateClimbs({ withSummit: true })
  res.json(user)
}
