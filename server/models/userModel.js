const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
  username: {
    type: String,
    minLength: 1,
    trim: true
  },
  email: {
    type: String,
    minLength: 1,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 1,
    trim: true,
    required: true,
    unique: true
  },
  accessLevel: {
    type: String,
    enum: ['standard', 'admin'],
    default: 'standard',
    lowercase: true,
    required: true
  }
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users
