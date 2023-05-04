const EBookController = require("../../controllers/ebook.controller");
const authenticationMiddleware = require("../../middlewares/authentication.middleware");
const authorizationMiddleware = require("../../middlewares/authorization.middleware");
const router = require('express').Router()
router.post('save-annotation',EBookController.saveAnnotation)
router.use(authenticationMiddleware)
router.get('/ebooks', EBookController.getEBooks)
router.get('/ebooks/:eBookId', authorizationMiddleware, EBookController.getOneEBooks)
router.post('/ebooks', EBookController.uploaded)
router.put('/ebooks/:eBookId',authorizationMiddleware, EBookController.updateName)
router.delete('/ebooks/:eBookId',authorizationMiddleware, EBookController.delete)

module.exports = router