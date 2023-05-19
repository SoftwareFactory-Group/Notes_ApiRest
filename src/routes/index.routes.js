const { Router } = require('express')
const router = Router()

const note = require('./notes.router')
const user = require('./user.router')

router.get('/', (req, res) => {
    res.json('This is the top of the top') 
})

router.use('/note', note);
router.use('/user', user);

module.exports = router