const express = require('express')
const router = express.Router()
const { getUsers } = require('../controllers/controller.user')
router.get('/all', getUsers)
module.exports = router
