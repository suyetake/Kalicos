const mongoose = require('mongoose')

const OrganizationsSchema = mongoose.Schema({
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
    default: 'nonprofit',
    lowercase: true
  },
  // description of the place
  description: {
    required: true,
    type: String
  },
  // structure required for mongoDb geospatial queries
  latLng: {
    type: {
      type: String,
      required: true,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: [{
      type: Number,
      required: true
    },
    {
      type: Number,
      required: true
    }]
  },
  // address line
  address: {
    required: true,
    type: String
  }
})

const Organizations = mongoose.model('Organizations', OrganizationsSchema)

module.exports = Organizations
