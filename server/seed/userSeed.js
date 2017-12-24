const { ObjectID } = require('mongodb')

const Users = require('../models/userModel')

const users = [
  {
    _id:   new ObjectID(),
    email: 'john@email.com',
    username:  'John Doe',
    password: 'john'
  },
  {
    _id:   new ObjectID(),
    email: 'test@email.com',
    username:  'test',
    password: '123'
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
