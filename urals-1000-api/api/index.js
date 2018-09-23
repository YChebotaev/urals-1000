const { Router } = require('express')
const jwt = require('express-jwt')
const summits = require('./summits')
const climbers = require('./climbers')
const token = require('./token')
const profile = require('./profile')

const api = Router()

const jwtAuth = jwt({
  secret: process.env.APP_JWT_SECRET
})

api.use('/token', token)

api.use('/summits', jwtAuth, summits)
api.use('/climbers', jwtAuth, climbers)
api.use('/profile', jwtAuth, profile)

module.exports = api
