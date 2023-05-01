const bcrypt = require('bcrypt')

const validate = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}


const hash = (password) => {
  const hashPassword = bcrypt.hashSync(password, 10)
  return hashPassword
}

module.exports = { validate, hash}