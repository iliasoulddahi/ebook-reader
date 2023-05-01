const { Ebook, sequelize } = require('../models')
const EBookController = {
    getEBooks: async (req, res, next) => {
        try {
            const response = await Ebook.findAll({
                where: {
                    OwnerId: req.user.id
                }
            });
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    getOneEBooks: async (req, res, next) => {
        try {
            const response = await Ebook.findByPk(req.params.eBookId);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    },
    uploaded: async (req, res, next) => {
        // use transaction
        try {
            await sequelize.transaction(async (t) => {

                const pdf = await Ebook.create({
                    name: req.body.name,
                    url: req.body.pdf_url,
                    OwnerId:req.user.id 
                }, { transaction: t });

                return pdf;
            });
            res.status(201).json({message: "new pdf created"})
        } catch (error) {
            next(error)
        }
    },
    updateName: async (req, res, next)=> {
        try {
            await Ebook.update({
                name: req.body.name
            }, {
                where:{
                    id: req.params?.eBookId
                }
            })

            res.status(200).json({message: "pdf name updated"})
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        // use transaction
        try {
            await sequelize.transaction(async (t) => {

                await Ebook.destroy({where:{
                    id: req.params?.eBookId
                }})

                return
            })
            res.status(200).json({message: "pdf deleted"})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = EBookController;