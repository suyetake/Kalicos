const helloController         = require('../controllers/helloController')
const userController          = require('../controllers/userController')
const organizationController  = require('../controllers/organizationController')
// const passport                = require('passport')

module.exports = (app) => {
  app.get('/hello', helloController.hello)

  // ==================================================
  // user routes
  // ==================================================
  app.post('/login', userController.login)
  // app.post('/login', function(req, res, next) {
  //   passport.authenticate('login', function(err, user, info) {
  //     if (err) {
  //       console.log(err)
  //       return next(err)
  //     }
  //     if (!user) {
  //       console.log(err)
  //       return res.status(400).send({ error: err.message })
  //     }
  //     req.logIn(user, function(err) {
  //       if (err) {
  //         console.log(err)
  //         return next(err)
  //       }
  //       console.log(user)
  //       return res.redirect('/senduser/' + user.username)
  //     })
  //   })(req, res, next)
  // })

  app.post('/api/user', userController.create)

  app.get('/api/organization', organizationController.searchByLocation)
  app.get('/api/organizations', organizationController.getAllLocations)
  app.post('/api/organization', organizationController.create)
  app.put('/api/update', organizationController.update)
}
