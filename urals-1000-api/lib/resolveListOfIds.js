module.exports = async function resolveListOfIds (Model, ids) {
  return Promise.all(
    ids.map(_id => Model.findOne({ _id }))
  )
}
