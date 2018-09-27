const resolveListOfIds = require('./resolveListOfIds')

module.exports = async function (Model, object, key) {
  if (Array.isArray(object[key])) {
    object[key] = await resolveListOfIds(Model, object[key])
  } else {
    object[key] = await Model.findOne({ _id: object[key] })
  }
  return object
}
