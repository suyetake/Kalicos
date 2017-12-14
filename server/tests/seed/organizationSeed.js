const { ObjectID } = require('mongodb')

const Organizations = require('../../models/organizationModel')

// seed data from spreadsheet
const organizations = [
  {
    _id:   new ObjectID(),
    address: '1600 Pleasant Street, Boulder, CO 80302',
    name:  'CU Heritage Center',
    category: 'educational',
    description: 'The Heritage Center at the University of Colorado of Boulder presents the history of the CU Boulder campus and its alumni. We are located on the third floor of Old Main and are operated by the CU Boulder Alumni Association.',
    latitude: 40.0092355,
    longitude: -105.2733468
  },
  {
    _id:   new ObjectID(),
    address: '1001 Arapahoe Ave. Boulder, CO 80302',
    name:  'Boulder Public Library',
    category: 'educational',
    description: 'The mission of the Boulder Public Library is to enhance the personal and professional growth of Boulder residents and contribute to the development and sustainability of an engaged community through free access to ideas, information, cultural experiences and educational opportunities.',
    latitude: 40.013952,
    longitude: -105.281769
  },
  {
    _id:   new ObjectID(),
    address: '6672 Gunpark Drive Boulder, CO 80302',
    name:  'Voices for Childre of Boulder County',
    category: 'nonprofit',
    description: 'CASA is the only volunteer position that empowers everyday citizens to be appointed by the Court. In an overburdened social welfare system, abused and neglected children often slip through the cracks among hundreds of current cases.',
    latitude: 40.013952, // dummy to be near boulder
    longitude: -105.281769
  },
  {
    _id:   new ObjectID(),
    address: '201 E Simpson Street, Lafayette, CO 80026',
    name: 'Flatirons Habitat for Humanity',
    category: 'nonprofit',
    description: 'Building strength, stability and self-reliance AND shelter. People in our community and all over the world partner with Habitat for Humanity to build or improve a place they can call home. Habitat homeowners help build their houses alongside volunteers and pay an affordable mortgage.',
    latitude: 39.9984502,
    longitude: -105.0890096
  }
]

const populateOrganizations = (done) => {
  console.log('POPULATE')
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
    .catch(err => done(err))
}

module.exports = {
  organizations,
  populateOrganizations
}
