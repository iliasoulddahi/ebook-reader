const { where } = require('sequelize');
const {Ebook} = require('../models')
const EBookController = {
    getEBooks:async (req,res,next)=> {
        try {
            const response = await Ebook.findAll({
                where: {
                    OwnerId:req.user.id
                }
            });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    getOneEBooks:async (req,res,next)=> {
        try {
            const response = await Ebook.findByPk();
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
}
module.exports = EBookController;