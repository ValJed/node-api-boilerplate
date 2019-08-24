const usersEndpoints = require('./components/users')

module.exports = (app) => {
  app.use('/users', usersEndpoints)
}
