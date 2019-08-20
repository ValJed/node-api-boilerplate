const app = require('./src')
const config = require('config')
const http = require('http')
const log = require('./src/lib/logger')

const PORT = config.get('server.port')
const HOST = config.get('server.host')

const server = http.createServer(app)

log.info('server is starting')
server.listen(PORT, HOST, (error) => {
  if (error) {
    log.fatal(error)
    process.exit(1)
  }
  log.info(`server is ready on ${HOST}:${PORT}`)
})
