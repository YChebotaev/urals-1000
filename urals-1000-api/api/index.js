const { Router } = require('express')
const jwt = require('express-jwt')
const summits = require('./summits')
const climbs = require('./climbs')
const token = require('./token')
const profile = require('./profile')

const api = Router()

const jwtAuth = jwt({ secret: process.env.APP_JWT_SECRET }).unless({ path: '/api/summits/summits.gpx' })

api.use('/token', token)

api.use('/summits', jwtAuth, summits)
api.use('/climbs', jwtAuth, climbs)
api.use('/profile', jwtAuth, profile)

module.exports = api
