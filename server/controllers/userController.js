const Users = require('../models/userModel')

module.exports = {
  create(req, res) {
    const { name, email } = req.body

    const user = new Users({ name, email })

    user.save()
      .then(user => res.send(user))
      .catch(err => res.status(400).send({ error: err.message }))
  }
}
