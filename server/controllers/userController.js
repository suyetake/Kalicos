const Users     = require('../models/userModel')
const passport  = require('passport')

module.exports = {
  create(req, res) {
    const { username, email } = req.body

    const user = new Users({ username, email })

    user.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send({ error: err.message }))
  },
  login(req, res) {
    passport.authenticate('login', function(err, user) {
      if (err) {
        return (err)
      } else {
        var returnedUser = { accessLevel: user.accessLevel, email: user.email, username: user.username }
        return res.send(returnedUser)
      }
    })(req, res)
  }
}
