const User = require('../../model/User')

module.exports = async (req, res) => {
  const { _id } = req.user
  const user = await User.findOne({ _id })
  res.json(user)
}
