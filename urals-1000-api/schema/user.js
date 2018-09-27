const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const user = new mongoose.Schema({
  _id: String,
  token: String,
  name: String,
  climbs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'climbs'
  }],
  url: String
})

module.exports = user

user.methods.getOrCreateToken = async function() {
  if (!this.token) {
    this.token = jwt.sign(this.toObject(), process.env.APP_JWT_SECRET)
    await this.save()
  }
  return this.token
}

user.methods.incrClimbings = async function() {
  const climbings = this.climbings || 0
  this.climbings = climbings + 1
  return this.save()
}

user.methods.populateClimbs = async function({ withSummit = false } = {}) {
  const Climb = mongoose.models.climb
  const Summit = mongoose.models.summit
  const climbs = await Promise.all(
    this.climbs.map(async climbId => {
      const climb = await Climb.findOne({
        _id: climbId
      })
      if (withSummit) {
        climb.summit = await Summit.findOne({
          _id: climb.summit
        })
      }
      return climb
    })
  )
  return Object.assign(this, { climbs })
}
