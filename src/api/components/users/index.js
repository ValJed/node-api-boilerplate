const users = require('express').Router()
const { createUserAccount } = require('./usersServices')

users.get('/:id', async (req, res, next) => {
  const userId = req.params.id

  console.log('id ===> ', id)
  res.status(200).send('okkkk')
})

users.put('/', async (req, res, next) => {
  const userData = req.body

  createUserAccount(userData)
})

module.exports = users
