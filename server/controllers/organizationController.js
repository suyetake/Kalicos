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
        var { lat: latitude, lng: longitude } = response
        const organization = new Organizations({ name, address, description, latitude, longitude })
        if (category) {
          organization.category = category.toLowerCase()
        }
        category = organization.category
        return organization.save().then(user => res.send({ name, address, category, latitude, longitude, description }))
      })
      .catch(err => res.status(400).send({ error: err.message }))
  },
  searchByLocation(req, res) {
    const { address, category } = req.query
    // find address location
    console.log('query request', req.query)

    lookupAddress(address)
      .then(response => {
        var {lat, lng} = response
        console.log(response)
        // FIXME: solution for searching is hard coded and doesn't reflect actual distance
        // currently leaving hardcoded for testing purposes
        var find = Organizations.find({}, '-_id name address category description latitude longitude')
          .where('latitude').gt(lat - 0.03).lt(lat + 0.03)
          .where('longitude').gt(lng - 0.03).lt(lng + 0.03)
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
        console.log(orgs)
        res.send(orgs)
      }
    })
  }
}
