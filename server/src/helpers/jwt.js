const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

if(!secret) {
  console.error(`SECRET is required in envoirment variable`)
  process.exit(1)
}

const sign = (payload) => {
  return jwt.sign(payload, secret)
}

const verify = (token) => {
  return jwt.verify(token, secret)
}

module.exports = { sign, verify }