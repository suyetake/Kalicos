const expect  = require('chai').expect
const request = require('supertest')

const app = require('../../server')

// seed data required for these tests
const { users, populateUsers } = require('../seed/userSeed')

describe('userController', () => {
  beforeEach(populateUsers)

  describe('POST /api/user', () => {
    it('should return user object if given valid name and unique email', (done) => {
      const user = {
        name:  'Joe Cool',
        email: 'unique@email.com'
      }

      request(app)
        .post('/api/user')
        .send(user)
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.all.keys(['_id', '__v', 'email', 'name'])
          expect(res.body.email).to.equal(user.email)
          expect(res.body.name).to.equal(user.name)
        })
        .end(done)
    })

    it('should return status 400 and an error message if given a duplicate email', (done) => {
      const user = users[0]

      request(app)
        .post('/api/user')
        .send(user)
        .expect(400)
        .expect(res => {
          expect(res.body).to.have.all.keys(['error'])
        })
        .end(done)
    })
  })
})
