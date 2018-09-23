const User = require('../../model/User')
const Climber = require('../../model/Climber')

module.exports = async (req, res) => {
  const users = await User.find({
    climbings: {
      $gt: 0
    }
  })

  // await Promise.all(
  //   users.map(user => user.populate('summits'))
  // )

  await Promise.all(
    users.map(async user => {
      user.summits = await Promise.all(
        user.summits.map(climberId =>
          Climber.findOne({
            _id: climberId
          })
        )
      )
    })
  )

  res.json(users)
}
