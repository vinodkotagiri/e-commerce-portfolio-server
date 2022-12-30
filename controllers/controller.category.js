const Category = require('../models/model.category')
async function getCategories(req, res) {
	try {
		const categories = await Category.find({}).sort({ name: 'asc' })
		res.status(200).json(categories)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
async function addCategory(req, res) {
	try {
		const { category } = req.body
		if (!category) return res.status(400).json({ error: 'Category name is required' })
		const check = await Category.findOne({ name: category.toLowerCase() })
		if (check) return res.status(400).json({ error: 'Category already exists' })
		const newCategory = await Category.create({ name: category })
		res.status(201).json({ message: 'Category created', category: newCategory })
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
async function deleteCategory(req, res) {
	const { id } = req.params
	try {
		await Category.findByIdAndDelete(id)
		res.status(200).json({ message: 'Category deleted succesfully!' })
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
async function updateCategory(req, res) {
	try {
		const { name, description, image, attr } = req.body
		const { id } = req.params
		if (!name) return res.status(400).json({ error: 'Category name is required' })
		const updatedCategory = await Category.findByIdAndUpdate(
			id,
			{ $set: { name, description, image, attr } },
			{ new: true }
		)
		res.status(201).json({ message: 'Category Updated', category: updateCategory })
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
module.exports = { getCategories, addCategory, deleteCategory, updateCategory }
