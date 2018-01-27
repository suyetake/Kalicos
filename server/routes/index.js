const helloController         = require('../controllers/helloController')
const userController          = require('../controllers/userController')
const organizationController  = require('../controllers/organizationController')

module.exports = (app) => {
  app.get('/hello', helloController.hello)

  // ==================================================
  // user routes
  // ==================================================
  app.get('/api/user', userController.findUserForUpdate)
  app.post('/login', userController.login)
  app.post('/api/createuser', userController.create)
  app.post('/api/user', userController.create)
  app.put('/api/updateuser', userController.update)

  app.get('/api/oneorganization', organizationController.findOneOrganization)
  app.get('/api/organization', organizationController.searchByLocation)
  app.get('/api/organizations', organizationController.findAllAcceptedLocations)
  app.get('/api/neworganizations', organizationController.findNewOrganizations)
  app.post('/api/organization', organizationController.create)
  app.put('/api/updateorganization', organizationController.update)
  app.delete('/api/removeorganization', organizationController.remove)
  app.delete('/api/rejectneworganizations', organizationController.rejectAllNew)

  app.put('/api/acceptnew', organizationController.acceptNew)
  app.put('/api/acceptallnew', organizationController.acceptAllNew)
}
