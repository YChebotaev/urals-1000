const User = require('../../model/User')
const populate = require('../../lib/populate2')

module.exports = async (req, res) => {
  let users = await User.find({})

  users = users.filter(user => {
    return user.climbs.length > 0
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
