
const mongoose = require('mongoose')

const OrganizationsSchema = mongoose.Schema({
  _id: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String,
    minLength: 1,
    trim: true
  },
  // organization type
  category: {
    type: String,
    enum: ['nonprofit', 'educational', 'landmark', 'museum'],
    default: 'nonprofit'
  },
  // description of the place
  description: {
    required: true,
    type: String
  },
  latitude: {
    required: true,
    type: Number
  },
  longitude: {
    required: true,
    type: Number
  },
  // address line
  address: {
    required: true,
    type: String
  }
})

const Organizations = mongoose.model('Organizations', OrganizationsSchema)

module.exports = Organizations
