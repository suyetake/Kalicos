const Users     = require('../models/userModel')
const passport  = require('passport')
const bCrypt   = require('bcrypt-nodejs')

module.exports = {
  create(req, res) {
    console.log(req.body)
    const generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
    }
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
        const returnedUser = { accessLevel: user.accessLevel, email: user.email, username: user.username }
        return res.send(returnedUser)
      }
    })(req, res)
  }
}
