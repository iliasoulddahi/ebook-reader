const AuthController = require('../../controllers/auth.controller')

const router = require('express').Router()

router.post('/auth', AuthController.login)

module.exports = router