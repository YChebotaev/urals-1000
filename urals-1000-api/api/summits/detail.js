const Summit = require('../../model/Summit')
const populate = require('../../lib/populate2')
const createObjectId = require('../../lib/createObjectId')

module.exports = async (req, res) => {
  const summit = await Summit.findOne({
    _id: createObjectId(req.params.id)
  })
  await populate(summit, 'climbs')
  await Promise.all(
    summit.climbs.map(
      climb => populate(climb, 'user')
    )
  )
  res.json(summit)
}
