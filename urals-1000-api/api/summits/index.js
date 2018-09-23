const bodyParser = require('body-parser')
const { Router } = require('express')
const { wrap } = require('@awaitjs/express')
const list = require('./list')
const detail = require('./detail')
const gpx = require('./gpx')
const addImage = require('./addImage')
const deleteImage = require('./deleteImage')
const addClimber = require('./addClimber')
const uploadImage = require('./uploadImage')

const summit = Router()

summit.get('/', wrap(list))
summit.get('/summits.gpx', wrap(gpx))
summit.post('/:id/uploadImage', uploadImage)
summit.post('/:id/addImage', bodyParser.json(), wrap(addImage))
summit.delete('/:id/deleteImage', bodyParser.json(), wrap(deleteImage))
summit.post('/:id/addClimber', bodyParser.json(), wrap(addClimber))
summit.get('/:id', wrap(detail))

module.exports = summit
