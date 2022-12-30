const mongoose = require('mongoose')
const { Schema, model } = mongoose
const productSchema = new Schema(
	{
		name: { type: String, required: true, unique: true, trim: true, lowercase: true },
		description: { type: String, required: true, trim: true },
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		count: { type: Number, required: true },
		price: { type: Number, required: true },
		rating: { type: Number, required: true },
		reviewsCount: { type: Number, default: 0 },
		sales: { type: Number, default: 0 },
		attr: [{ key: { type: String, value: { type: String } } }],
		images: [{ type: String }],
		reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
	},
	{ timestamps: true }
)
productSchema.index({ name: 'text', description: 'text' }, { name: 'TextIndex' })
productSchema.index({ 'attr.key': 1, 'attr.value': 1 })
module.exports = model('Product', productSchema)
