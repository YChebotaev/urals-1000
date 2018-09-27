const { Router } = require('express')
const { wrap } = require('@awaitjs/express')
const list = require('./list')

const climbs = Router()

climbs.get('/', wrap(list))

module.exports = climbs
