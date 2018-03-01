const env = process.env.NODE_ENV || 'development'

var config = {}
if(env === 'test') {
  config = require('./config.json')
}

if(env === 'test') {
  const envConfig = config[env]

  // eslint-disable-next-line
  Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])
}
