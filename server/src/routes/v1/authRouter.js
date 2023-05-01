const router = require('express').Router()

router.post('/auth', (req, res)=> {
    res.send('hello login')
})

module.exports = router