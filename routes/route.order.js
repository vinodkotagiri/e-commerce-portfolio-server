const express = require('express')
const router = express.Router()
const { getOrders } = require('../controllers/controller.order')
router.get('/all', getOrders)
module.exports = router
