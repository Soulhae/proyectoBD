const conf = {}

conf.port = process.env.PORT
conf.secret_key = process.env.SECRET_KEY_TECNOFASTLOCK
conf.lock_url = process.env.LOCK_URL


module.exports = conf;