'use strict'
const { stringify } = require('querystring')
const { json } = require('micro')
const axios = require('axios')
const cors = require('micro-cors')()

module.exports = cors(async (req, res) => {
  const { username, password } = await json(req)

  const data = {
    client_id: 'bYGKuGVw91e0NMfPGp44euvGt59s',
    client_secret: 'HP3RmkgAmEGro0gn1x9ioawQE8WMfvLXDz3ZqxpK',
    get_secure_url: 1,
    grant_type: 'password',
    username,
    password,
  }

  const { data: response } = await axios.post(
    'https://oauth.secure.pixiv.net/auth/token',
    stringify(data)
  )

  return response
})
