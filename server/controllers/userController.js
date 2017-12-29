const Users     = require('../models/userModel')
const passport  = require('passport')
const bCrypt   = require('bcrypt-nodejs')

const generateHash = (password) => {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
}

module.exports = {
  create(req, res) {
    console.log(req.body)
    const { username, email, accessLevel } = req.body
    const password = generateHash(req.body.password)
    const user = new Users({ username, email, password, accessLevel })
    user.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send({ error: err.message }))
  },
  login(req, res) {
    passport.authenticate('login', function(err, user) {
      if (err) {
        return (err)
      } else {
        let returnedUser = { id: user._id, accessLevel: user.accessLevel, email: user.email, username: user.username }
        return res.send(returnedUser)
      }
    })(req, res)
  },
  update(req, res) {
    var { _id, username, email, oldPassword, newPassword, accessLevel } = req.body
    var findOne = Users.findOne({ _id })
    findOne.exec(function (err, user) {
      if (err) {
        console.log(err)
      } else {
        var confirmPassword = user.password
        if (generateHash(oldPassword === confirmPassword)) {
          var newHashedPassword = generateHash(newPassword)
          var update = Users.update(
            { _id },
            { $set: { username, email, password: newHashedPassword, accessLevel } }
          )
          update.exec(function (err, user) {
            if (err) {
              console.log(err)
              res.send(err)
            } else {
              console.log(user)
            }
          })
        }
      }
    })
  },
  findUserForUpdate(req, res) {
    var { email } = req.query
    var find = Users.findOne({ email })
    find.exec(function (err, user) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        let returnedUser = { id: user._id, accessLevel: user.accessLevel, email: user.email, username: user.username }
        res.send(returnedUser)
      }
    })
  }
}
