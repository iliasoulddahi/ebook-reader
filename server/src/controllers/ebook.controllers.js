const EBookController = {
    getEBooks:async (req,res)=> {
        res.send(process.env.JWT_SECRET);
    },
}
module.exports = EBookController;