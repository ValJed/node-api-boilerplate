const User = require('./userModel')
const log = require('../../../lib/logger')
const bcrypt = require('bcrypt')

module.exports = {
  async createUserAccount (data) {
    try {
      const user = new User(data)

      await user.validate()
      console.log('user ===> ', require('util').inspect(user, { colors: true, depth: 2 }))
    } catch (error) {
      log.error(error)
      return error
    }
  },
  async getUser (id) {
    const user = await User.find({ _id: id })

    console.log('user ===> ', require('util').inspect(user, { colors: true, depth: 2 }))
  }
}
