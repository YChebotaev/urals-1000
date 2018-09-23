require('dotenv').config()
const express = require('express')
const api = require('./api')
const cors = require('cors')
require('./db-connect')

console.log('process.env')
for (let key of Object.keys(process.env)) {
  if (key.indexOf('APP_') === 0) {
    console.log(key, '=', process.env[key])
  }
}

const app = express()

app.use(cors({
  origin: process.env.APP_ORIGIN,
  credentials: true
}))
app.use('/api', api)
app.use('/statics', express.static('./statics/'))

app.listen(Number(process.env.APP_PORT), () => {
  console.info('Api server listening at http://localhost:3001')
})
