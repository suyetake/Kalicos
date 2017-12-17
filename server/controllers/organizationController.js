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
  createOrganization(req, res) {
    var { name, address, description, category } = req.body
    lookupAddress(address)
      .then(response => {
        // var { latitude: lat, longitude: lng } = response
        var latitude = response.lat
        var longitude = response.lng
        console.log(response)
        const organization = new Organizations({ name, address, description, latitude, longitude })
        if (category) {
          organization.category = category.toLowerCase()
        }
        category = organization.category
        organization.save().then(() => {
          var find = Organizations.find({name}, '_id name address category description latitude longitude')
          find.exec(function (err, org) {
            console.log('found org', org)
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
  updateOrganization(req, res) {
    console.log('request', req.body)
    var { name, category, description, address } = req.body
    lookupAddress(address)
      .then(response => {
        var { latitude, longitude } = response
        console.log(response)
        var update = Organizations.find(
          { _id: req.body._id },
          { name: name, category: category, description: description, address: address, latitude: latitude, longitude: longitude }
        )
        update.exec(function (err, org) {
          console.log(org)
          if (err) {
            console.log(err)
            res.send(err)
          } else {
            res.send(org)
          }
        })
      })
  },
  searchByLocation(req, res) {
    var { address, category } = req.query
    // find address location
    console.log('query request', req.query)

    lookupAddress(address)
      .then(response => {
        var { latitude, longitude } = response
        console.log(response)
        // FIXME: solution for searching is hard coded and doesn't reflect actual distance
        // currently leaving hardcoded for testing purposes
        var find = Organizations.find({}, '_id name address category description latitude longitude')
          .where('latitude').gt(latitude - 0.03).lt(latitude + 0.03)
          .where('longitude').gt(longitude - 0.03).lt(longitude + 0.03)
        if (category) {
          find.where('category').eq(category.toLowerCase())
        }
        find.exec(function (err, orgs) {
          if (err) {
            console.log(err)
            res.send(err)
          } else {
            console.log(orgs)
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
    var find = Organizations.find({}, '_id name address category description latitude longitude')
    find.exec(function (err, orgs) {
      if (err) {
        console.log(err)
        res.send(err)
      } else {
        res.send(orgs)
      }
    })
  }
}
