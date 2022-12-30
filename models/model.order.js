const mongoose = require('mongoose')
const { Schema, model } = mongoose
const orderSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
		orderTotal: {
			itemsCount: { type: Number, required: true },
			cartSubtotal: { type: Number, required: true },
		},
		cartItems: [
			{
				name: { type: String, required: true },
				price: { type: Number, required: true },
				image: { type: String, required: true },
				quantity: { type: Number, required: true },
				count: { type: Number, required: true },
			},
		],
		transactionResult: {
			status: { type: String },
			createTime: { type: String },
			amount: { type: Number },
		},
		isPaid: {
			type: Boolean,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		isDelivered: {
			type: Boolean,
			default: false,
		},
		deliveredAt: {
			type: Date,
		},
	},

	{ timestamps: true }
)
module.exports = model('Order', orderSchema)
