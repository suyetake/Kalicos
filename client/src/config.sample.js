
// create a new config.js file local to your machine with your own google maps api key
// Will probably trade out later for something like process.env('KALICOS_MAPS_API_KEY')
var mapsApiKey, serverUrl

if(process.env.NODE_ENV !== 'production') {
  mapsApiKey = "KEY_HERE"
  serverUrl = "http://localhost:4000" // should be local server if you use docker-compose
} else {
  mapsApiKey = "PRODUCTION_KEY_HERE"
  serverUrl = "PRODUCTION_SERVER_URL"
}

export { mapsApiKey, serverUrl }
