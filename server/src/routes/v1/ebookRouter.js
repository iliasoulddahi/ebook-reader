const EBookController = require("../../controllers/ebook.controller");
const authenticationMiddleware = require("../../middlewares/authentication.middleware");
const router = require('express').Router()

router.use(authenticationMiddleware)
router.get('/ebooks', EBookController.getEBooks)

module.exports = router