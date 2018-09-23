const { Router } = require('express')
const { wrap } = require('@awaitjs/express')
const bodyParser = require('body-parser')
const detail = require('./detail')
const update = require('./update')
const uploadImage = require('./uploadImage')
const updateImage = require('./updateImage')

const profile = Router()

profile.post('/:id/uploadImage', uploadImage)
profile.post('/:id/updateImage', bodyParser.json(), wrap(updateImage))
profile.get('/:id', wrap(detail))
profile.post('/:id', bodyParser.json(), wrap(update))

module.exports = profile
