const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const config = require('config')

const corsConfig = config.get('cors')

const app = express()

db.connect()

app.use(cors(corsConfig))

app.use(bodyParser.json())

app.use('/healthcheck', (req, res, next) => {
  return res.status(200).send('ok')
})

module.exports = app