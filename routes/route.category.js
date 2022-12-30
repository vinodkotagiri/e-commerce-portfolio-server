const express = require('express')
const router = express.Router()
const { getCategories, addCategory, deleteCategory, updateCategory } = require('../controllers/controller.category')
const { isLoggedIn, isAdmin } = require('../middleware/auth')
router.get('/all', getCategories)
router.post('/add', isLoggedIn, isAdmin, addCategory)
router.delete('/:id', isLoggedIn, isAdmin, deleteCategory)
router.put('/:id', isLoggedIn, isAdmin, updateCategory)
module.exports = router
