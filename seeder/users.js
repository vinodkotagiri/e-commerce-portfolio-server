const bcrypt = require('bcryptjs')
const ObjectId = require('mongodb').ObjectId
const users = [
	// {
	// 	firstName: 'admin',
	// 	lastName: 'admin',
	// 	email: 'admin@scart.com',
	// 	password: bcrypt.hashSync('admin@admin.com', 10),
	// 	isAdmin: true,
	// },
	{
		firstName: 'John',
		lastName: 'Doe',
		email: 'user@scart.com',
		password: bcrypt.hashSync('john@doe.com', 10),
	},
]

module.exports = users
