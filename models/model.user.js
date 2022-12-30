const mongoose = require('mongoose')
const { Schema, model } = mongoose
const userSchema = new Schema(
	{
		firstName: { type: String, required: true, trim: true, lowercase: true },
		lastName: { type: String, required: true, trim: true, lowercase: true },
		email: { type: String, required: true, trim: true, lowercase: true, unique: true },
		phone: { type: String, trim: true, lowercase: true, unique: true },
		password: { type: String, required: true },
		city: { type: String },
		state: { type: String },
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)
module.exports = model('User', userSchema)
