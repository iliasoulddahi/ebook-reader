const router = require('express').Router()
const authRouter = require('./authRouter')
const ebookRouter = require('./ebookRouter')

router.use(authRouter)
router.use(ebookRouter)

module.exports = router