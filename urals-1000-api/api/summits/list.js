const Summit = require('../../model/Summit')
const Climb = require('../../model/Climb')

module.exports = async (req, res) => {
  const summits = await Promise.all(
    (await Summit.find({})).map(async summit => {
      summit = summit.toObject()
      const climbs = await Promise.all(
        summit.climbs.map(climbId => Climb.findOne({ _id: climbId }))
      )
      Object.assign(summit, { climbs })
      return summit
    })
  )
  
  res.json(summits)
}
