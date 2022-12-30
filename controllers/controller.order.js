const Order = require('../models/model.order')
async function getOrders(req, res) {
	try {
		const orders = await Order.find({}).sort({ name: 'asc' })
		res.status(200).json(orders)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
module.exports = { getOrders }
