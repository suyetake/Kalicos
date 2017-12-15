const { ObjectID } = require('mongodb')

const Organizations = require('../models/organizationModel')

// seed data from spreadsheet
const organizations = [
  {
    _id:   new ObjectID(),
    name:  'CU Heritage Center',
    org_type: 'EDUCATIONAL',
    description: 'The Heritage Center at the University of Colorado of Boulder presents the history of the CU Boulder campus and its alumni. We are located on the third floor of Old Main and are operated by the CU Boulder Alumni Association.',
    latitude: 40.0092355,
    longitude: -105.2733468,
    address: '1600 Pleasant Street'
  },
  {
    _id:   new ObjectID(),
    name:  'Boulder Public Library',
    org_type: 'EDUCATIONAL',
    description: 'The mission of the Boulder Public Library is to enhance the personal and professional growth of Boulder residents and contribute to the development and sustainability of an engaged community through free access to ideas, information, cultural experiences and educational opportunities.',
    latitude: 40.013952,
    longitude: -105.281769,
    address: '1001 Arapahoe Ave'
  },
  {
    _id:   new ObjectID(),
    name: 'Flatirons Habitat for Humanity',
    org_type: 'NONPROFIT',
    description: 'Building strength, stability and self-reliance AND shelter. People in our community and all over the world partner with Habitat for Humanity to build or improve a place they can call home. Habitat homeowners help build their houses alongside volunteers and pay an affordable mortgage.',
    latitude: 39.9984502,
    longitude: -105.0890096,
    address: '6672 Gunpark Drive'
  }
]

const populateOrganizations = (done) => {
  console.log('POPULATED ORGANIZATIONS')
  Organizations
    .remove({})
    .then(() => {
      const addOrganizations = []

      organizations.forEach(organization => {
        addOrganizations.push(new Organizations(organization).save())
      })

      return Promise.all(addOrganizations)
    })
    .then(() => done())
    .catch(err => done(err + 'damn'))
}

module.exports = {
  organizations,
  populateOrganizations
}
