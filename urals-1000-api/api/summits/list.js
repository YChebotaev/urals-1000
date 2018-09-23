const Summit = require('../../model/Summit')

module.exports = async (req, res) => {
  const summits = await Summit.find({})
  res.json(summits)
}
