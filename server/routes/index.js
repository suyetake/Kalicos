const helloController         = require('../controllers/helloController')
const userController          = require('../controllers/userController')
const organizationController  = require('../controllers/organizationController')

module.exports = (app) => {
  app.get('/hello', helloController.hello)

  // ==================================================
  // user routes
  // ==================================================
  app.post('/login', userController.login)
  app.post('/api/createuser', userController.create)
  // app.post('/signup', userController.signup)

  app.post('/api/user', userController.create)
  // app.put('/api/updateuser', userController.update)

  app.get('/api/organization', organizationController.searchByLocation)
  app.get('/api/organizations', organizationController.getAllLocations)
  app.post('/api/organization', organizationController.create)
  app.put('/api/updateorganization', organizationController.update)
}