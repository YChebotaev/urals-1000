module.exports = (model, key) =>
  new Promise((resolve, reject) => {
    model.populate(key, err => err ? reject(err) : resolve(model))
  })
