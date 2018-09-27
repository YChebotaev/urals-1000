const User = require('../../model/User')
const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const users = await User.find({
    climbings: {
      $gt: 0
    }
  })

  await Promise.all(
    users.map(async user => user.populateClimbs({ withSummit: true }))
  )

  res.json(users)
}
