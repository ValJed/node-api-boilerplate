const config = require('config')
const logConfig = config.get('log')
const logger = require('pino')(logConfig)

module.exports = logger
