const bodyParser = require('body-parser')
const cors       = require('cors')
const express    = require('express')
const helmet     = require('helmet')
const logger     = require('morgan')

const app = express()

// load custom .env variables
require('./config/config')
const isDevEnv = process.env.NODE_ENV === 'development'

// load db config
const mongoose = require('./db/mongoose')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

if(isDevEnv) {
  db.once('open', () => {
    console.log('db connected successfully')
    require('./seed/organizationSeed').populateOrganizations()
    require('./seed/userSeed').populateUsers()
  })
}

// load middleware
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

if(isDevEnv) {
  app.use(logger('dev'))
}

// attach routes to app
require('./routes')(app)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  if(isDevEnv) {
    console.log(`server listening on http://localhost:${PORT}`)
  }
})

// app export is for integration testing
module.exports = app
