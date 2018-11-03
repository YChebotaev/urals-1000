const Summit = require('../../model/Summit')
const { buildGPX, BaseBuilder } = require('gpx-builder')
const { Point } = BaseBuilder.MODELS

const mapSummitToPoint = summit => {
  const [ lat, lon ] = summit.coords
  return new Point(lat, lon, {
    name: summit.name,
    ele: summit.height,
    desc: summit.ridge
  })
}

module.exports = async (req, res) => {
  const summits = await Summit.find({})
  const points = summits.map(mapSummitToPoint)
  const gpxData = new BaseBuilder()
  gpxData.setSegmentPoints(points)
  const gpxFile = buildGPX(gpxData.toObject())
  res.type('application/gpx+xml')
  res.send(gpxFile)
}
