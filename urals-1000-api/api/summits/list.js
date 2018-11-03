const Summit = require('../../model/Summit')
const populate = require('../../lib/populate2')

module.exports = async (req, res) => {
  const summits = await Summit.find({})

  await Promise.all(
    summits.map(
      summit => populate(summit, 'climbs')
    )
  )
  
  res.json(summits)
}
