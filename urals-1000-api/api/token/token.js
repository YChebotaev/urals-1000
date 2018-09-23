const User = require('../../model/User')
const shortid = require('shortid')

module.exports = async (req, res) => {
  let { userId } = req.query
  
  let user = await User.findOne({
    _id: userId
  })

  if (!user) {
    if (!userId) {
      userId = shortid.generate()
    }
    user = new User({
      _id: userId,
      name: '',
      climbings: 0
    })
    await user.save()
  }

  const token = await user.getOrCreateToken()

  res.json({
    userId,
    token
  })
}
