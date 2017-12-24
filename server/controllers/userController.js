const Users = require('../models/userModel')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

module.exports = {
  create(req, res) {
    const { username, email } = req.body

    const user = new Users({ username, email })

    user.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send({ error: err.message }))
  },
  login(req, res) {
    console.log(req.body)
    passport.use(new LocalStrategy(
      function(username, password, done) {
        console.log('after func')
        Users.findOne({username: username}, function (err, user) {
          if (err) {
            console.log('err', err)
            return done(err)
          }
          if (!user) {
            console.log('no user')
            return done(null, false, { message: 'Incorrect Username' })
          }
          if (!password) {
            console.log('no pass')
            return done(null, false, { message: 'Incorrect Password' })
          }
          console.log('success')
          return done(null, user)
        })
      }
    ))
  }
}
