const { validate } = require('../helpers/bcrypt')
const { sign } = require('../helpers/jwt')
const { User } = require('../models')
const AuthController = {
    register: async(req,res,next)=> {
        try {
            const { email, password, username } = req.body
      
            const user = await User.create({ email, password, username })
      
            const { id, role } = user
            const access_token = sign({ id, role, username, email })
            res
              .status(201)
              .json({ message: `Admin with email ${email} has been registered!`, access_token })
          } catch (error) {
            next(error)
          }
    },
    login:async (req,res,next)=> {
        console.log(req.body)
        try {
            const { email, password } = req.body
            
            if(!email) throw {
                name: 'EmailIsRequired'
              }
            if(!password) throw {
                name: "PasswordIsRequired"
            }

            const user = await User.findOne({
              where: {
                email,
              },
            })
      
            const err = {
              name: 'InvalidCredentials'
            }
      
            if (!user) throw err
      
            const isValid = validate(password, user.password)
            if (!isValid) throw err
      
            const { id, role, username } = user
      
            const access_token = sign({ id, role, username, email })
      
            res.json({ id,access_token, username, role })
          } catch (error) {
            next(error)
          }
    },
}
module.exports = AuthController;