const mongoose = require('mongoose')
const bCrypt   = require('bcrypt-nodejs')

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
  }
})

UsersSchema.methods.generateHash = function(password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
}

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users
