const { ObjectID } = require('mongodb')

const bCrypt   = require('bcrypt-nodejs')
const Users = require('../models/userModel')

const hashPass = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
}

const users = [
  {
    _id:   new ObjectID(),
    email: 'john@email.com',
    username:  'John Doe',
    password: hashPass('john')
  },
  {
    _id:   new ObjectID(),
    email: 'test@email.com',
    username:  'test',
    password: hashPass('123')
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
