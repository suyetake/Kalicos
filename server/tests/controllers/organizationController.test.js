/* eslint-disable */
const expect  = require('chai').expect
const request = require('supertest')

const app = require('../../server')

// seed data required for these tests
const { organizations, populateOrganizations } = require('../seed/organizationSeed')

describe('organizationController', () => {
  beforeEach(populateOrganizations)

  describe('POST /api/organization', () => {
    const valid_organization = {
      name: 'Boulder Public Library Address',
      address: "1001 Arapahoe Ave, Boulder, CO",
      description: "This is an organization's description"
    }
    const invalid_organization_1 = {
      name: 'Boulder Public Library Address1',
      description: "This is an organization's description1"
    }
    it('should return organization if given valid fields', (done) => {
      request(app)
        .post('/api/organization')
        .send(valid_organization)
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.all.keys(['name', 'address', 'category', 'latitude', 'longitude', 'description'])
          expect(res.body.name).to.equal(valid_organization.name)
          expect(res.body.description).to.equal(valid_organization.description)
          expect(res.body.address).to.equal(valid_organization.address)
        })
        .end(done)
    })
    it('should fail if a field is missing', (done) => {
      request(app)
        .post('/api/organization')
        .send(invalid_organization_1)
        .expect(400)
        .end(done)
    })
  })

  describe('GET /api/organization', () => {
    it('should search by address to return organizations in Boulder', (done) => {
      request(app)
        .get('/api/organization?address=Boulder')
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.lengthOf(3)
          res.body.forEach(org =>
            expect(org).to.have.all.keys(['name', 'address', 'category', 'latitude', 'longitude', 'description'])
          )
        })
        .end(done)
    })
    it('should search by address and category to return educational organizations in Boulder', (done) => {
      request(app)
        .get('/api/organization?address=Boulder&category=Educational')
        .expect(200)
        .expect(res => {
          expect(res.body).to.have.lengthOf(2)
          res.body.forEach(org =>
            expect(org).to.have.all.keys(['name', 'address', 'category', 'latitude', 'longitude', 'description'])
          )
        })
        .end(done)
    })
  })
})
