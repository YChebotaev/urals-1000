const { Router } = require('express')
const { wrap } = require('@awaitjs/express')
const getToken = require('./token')

const token = Router()

token.get('/', wrap(getToken))

module.exports = token
