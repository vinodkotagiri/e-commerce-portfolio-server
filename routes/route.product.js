const express = require('express')
const router = express.Router()
const { getProducts } = require('../controllers/controller.product')
router.get('/all', getProducts)
module.exports = router
