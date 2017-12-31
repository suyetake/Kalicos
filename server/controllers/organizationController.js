'use strict'
const Organizations = require('../models/organizationModel')
const axios = require('axios')
// const url = require('url')

function lookupAddress(address) {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?' +
  'address=' + address + '&key=' + process.env.API_KEY_GMAPS)
    .then(response => {
      // checks for error from google maps api
      if(response.data['error_message']) {
        throw new Error(response.data['error_message'])
      }
      return Promise.resolve(response.data.results[0].geometry.location)
    })
}

module.exports = {
  create(req, res) {
    var { name, address, description, category } = req.body
    lookupAddress(address)
      .then(response => {
        var latLng = {
          type: 'Point',
          coordinates: [ response.lng, response.lat ]
        }
        // const newlyAdded = true
        console.log(response)
        const organization = new Organizations({ name, address, description, latLng, category })
        organization.save().then(() => {
          var find = Organizations.find({name})
          find.exec(function (err, org) {
            if (err) {
              console.log(err)
              res.send(err)
            } else {
              res.send(org)
            }
          })
        })
      })
  },
  update(req, res) {
    var { _id, name, category, description, address } = req.body
    lookupAddress(address)
      .then(response => {
        var latLng = {
          type: 'Point',
          coordinates: [ response.lng, response.lat ]
        }
        var update = Organizations.update(
          { _id: _id },
          { $set: { name, category, description, address, latLng } }
        )
        update.exec(function (err, org) {
          if (err) {
            console.log(err)
            res.send(err)
          } else {
            var find = Organizations.find({_id})
            find.exec(function (err, org) {
              if (err) {
                console.log(err)
                res.send(err)
              } else {
                res.send(org)
              }
            })
          }
        })
      })
  },
  updateNew(req, res) {
    var { id } = req.body
    var update = Organizations.update(
      { _id: id },
      { $set: { newlyAdded: false } }
    )
    update.exec(function (err, org) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        res.send(org)
      }
    })
  },
  remove(req, res) {
    var { id, name } = req.body
    console.log(id)
    var remove = Organizations.remove({ _id: id })
    remove.exec(function (err) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send('Removed ' + name + ' ' + id)
      }
    })
  },
  searchByLocation(req, res) {
    var { address, distance } = req.query
    // find address location
    console.log('query request', req.query)

    lookupAddress(address)
      .then(response => {
        var latLng = {
          type: 'Point',
          coordinates: [ response.lng, response.lat ]
        }
        console.log(latLng)
        var find = Organizations.find({ latLng: { $geoWithin: { $centerSphere: [ [ latLng.coordinates[0], latLng.coordinates[1] ], distance / 3963.2 ] } } })
        find.exec(function (err, orgs) {
          if (err) {
            console.log(err)
            res.send(err)
          } else {
            console.log('orgs sent', orgs)
            res.send(orgs)
          }
        })
      })
      .catch(error => {
        console.log(error)
        res.send({ error: error.message })
      })
  },
  getAllLocations(req, res) {
    var find = Organizations.find({})
    find.exec(function (err, orgs) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        res.send(orgs)
      }
    })
  },
  getNewOrganizations(req, res) {
    var find = Organizations.find({newlyAdded: true})
    find.exec(function (err, orgs) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        console.log(orgs)
        res.send(orgs)
      }
    })
  }
}
