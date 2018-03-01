const LocalStrategy  = require('passport-local').Strategy
const Users          = require('../models/userModel')
const bCrypt         = require('bcrypt-nodejs')

module.exports = function(passport) {
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      done(err, user)
    })
  })

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  },
  function(req, username, password, done) {
    Users.findOne({username: username}, function (err, user) {
      if (err) {
        console.log('err', err)
        return done(err)
      }
      if (!user) {
        console.log('no user')
        return done(null, false, { message: 'Incorrect Username' })
      }
      if (!isValidPassword(user, password)) {
        console.log('no pass')
        return done(null, false, { message: 'Incorrect Password' })
      }
      console.log('success', user)
      return done(null, user)
    })
  }
  ))

  var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password)
  }
}
