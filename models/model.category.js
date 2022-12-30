const mongoose = require('mongoose')
const { Schema, model } = mongoose
const categorySchema = new Schema(
	{
		name: { type: String, required: true, trim: true, unique: true, lowercase: true },
		description: { type: String, default: 'Default category description' },
		image: { type: String, required: true },
		attrs: [{ key: { type: String }, value: [{ type: String }] }],
	},
	{ timestamps: true }
)
categorySchema.index({ description: 1 })
module.exports = model('Category', categorySchema)
