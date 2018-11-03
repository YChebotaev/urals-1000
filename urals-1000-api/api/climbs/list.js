const User = require('../../model/User')
const populate = require('../../lib/populate2')

module.exports = async (req, res) => {
  const users = await User.find({
    climbings: {
      $gt: 0
    }
  })

  await Promise.all(
    users.map(
      async user => {
        await populate(user, 'climbs')
        await Promise.all(
          user.climbs.map(
            climb => populate(climb, 'summit')
          )
        )
      }
    )
  )

  res.json(users)
}
