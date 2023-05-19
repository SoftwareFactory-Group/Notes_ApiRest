const { Router } = require('express');
const router = Router()

const user = require('../controllers/user.controllers');

router.get('/', user.user);

module.exports = router;
