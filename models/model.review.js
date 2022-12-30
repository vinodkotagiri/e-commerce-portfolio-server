const mongoose = require('mongoose')
const { Schema, model } = mongoose
const reviewSchema = new Schema(
	{
		comment: { type: String, required: true, trim: true },
		rating: { type: Number, required: true },
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
	},
	{ timestamps: true }
)
module.exports = model('Review', reviewSchema)
