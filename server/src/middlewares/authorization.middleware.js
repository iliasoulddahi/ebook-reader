const {Ebook, User} = require("../models");
module.exports = async function authorization(req, res, next) {
    try {
        if(!req.params["eBookId"]){
            next()
            return
        }

        const eBook = await Ebook.findByPk(req.params.eBookId)
        if(!eBook){
            throw {
                name:"NotFound"
            }
        }
        // console.log(eBook.OwnerId, "===", req.user.id)
        if(eBook.OwnerId !== req.user.id){
            throw {
                name:"Forbidden"
            }
        }
        next()
    } catch (error) {
        next(error)
    }
}