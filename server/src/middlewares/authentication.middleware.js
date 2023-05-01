const { verify } = require('../helpers/jwt')
const {User} = require('../models')
module.exports = async function authentication(req, res, next){
    try {
        const {token} = req.headers
        console.log(req.params)
        if(!token){
            throw {
                name:"Unauthenticated"
            }
        }
        // check token
        const payload = verify(token)
        
        //check userdata
        const user = await User.findByPk(payload.id)
        if(!user) {
            throw {
                name:"Unauthenticated"
            }
        }

        req.user = {
            id:user.id,
            role:user.role,
            email:user.email
        }
        next()  
          
    } catch (err) {
        next(err)
    }
}