const express = require('express')
const router = express.Router()
const { getCategories } = require('../controllers/controller.category')
router.get('/all', getCategories)
module.exports = router
