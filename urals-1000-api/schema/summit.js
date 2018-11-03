const mongoose = require('mongoose')
const Summit = require('../model/Summit')

const summit = new mongoose.Schema({
  name: String,
  height: Number,
  ridge: String,
  climbs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'climb'
  }],
  coords: [Number],
  images: [{
    width: Number,
    height: Number,
    url: String,
    alt: String
  }]
})

summit.methods.populateClimbs = async function({ withSummit = false, withUser = true } = {}) {
  const Climb = mongoose.models.climb
  const User = mongoose.models.user
  const Summit = mongoose.model.summit
  this.climbs = await Promise.all(
    this.climbs.map(async climbId => {
      const climb = await Climb.findOne({
        _id: climbId
      })
      if (withSummit) {
        climb.summit = await Summit.findOne({
          _id: climb.summit
        })
      }
      if (withUser) {
        climb.user = await User.findOne({
          _id: climb.user
        })
      }
      return climb
    })
  )
  return this
}

module.exports = summit
