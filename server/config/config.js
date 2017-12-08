const env = process.env.NODE_ENV || 'development'

const config = require('./config.json')

if(env === 'development' || env === 'test') {
  const envConfig = config[env]

  // eslint-disable-next-line
  Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key])
} else {
  // secret key for jwt authentication
  process.env.secret = config.production.SECRET
}
