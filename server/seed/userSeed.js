const { ObjectID } = require('mongodb')

const bCrypt   = require('bcrypt-nodejs')
const Users = require('../models/userModel')

const hashPassword = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
}

const users = [
  {
    _id:   new ObjectID(),
    email: 'john@email.com',
    username:  'john',
    password: hashPassword('john'),
    accessLevel: 'standard'
  },
  {
    _id:   new ObjectID(),
    email: 'test@email.com',
    username:  'test',
    password: hashPassword('123'),
    accessLevel: 'admin'
  }
]

const populateUsers = (done) => {
  console.log('POPULATED USERS')
  Users
    .remove({})
    .then(() => {
      const addUsers = []

      users.forEach(user => {
        addUsers.push(new Users(user).save())
      })

      return Promise.all(addUsers)
    })
}

module.exports = {
  users,
  populateUsers
}
