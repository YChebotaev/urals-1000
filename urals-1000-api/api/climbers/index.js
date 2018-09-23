const { Router } = require('express')
const { wrap } = require('@awaitjs/express')
const list = require('./list')

const climbers = Router()

climbers.get('/', wrap(list))

module.exports = climbers
