const { Router } = require('express');
const router = Router()

const notes = require('../controllers/notes.controllers');

router.get('/', notes.note);

module.exports = router;
