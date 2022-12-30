const User = require('../models/model.user')
const generateToken = require('../helpers/generateToken')
const encryptPassword = require('../helpers/encryptPassword')
const verifyPassword = require('../helpers/verifyPassword')
async function register(req, res) {
	try {
		console.log(req.body)
		const { firstName, lastName, email, phone, password } = req.body
		if (!(firstName && lastName && email && password && phone))
			return res.status(400).json({ error: 'All fields are required!' })
		const IsEmailExists = await User.findOne({ email })
		if (IsEmailExists) return res.status(400).json({ error: 'User with email already exists!' })
		const IsPhoneExists = await User.findOne({ phone })
		if (IsPhoneExists) return res.status(400).json({ error: 'User with phone already exists!' })
		const hashedPassword = await encryptPassword(password, 12)
		const newUser = await User.create({ firstName, lastName, email, password: hashedPassword, phone })
		res.status(201).json({ message: 'User registered succesfully!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
async function login(req, res) {
	try {
		const { email, password, keepSignedIn } = req.body
		if (!(email && password)) return res.status(400).json({ error: 'All fields are required!' })
		const user = await User.findOne({ email })
		if (!user) return res.status(400).json({ error: 'User with email does not exists!' })
		const checkPasswd = await verifyPassword(password, user.password)
		if (!checkPasswd) return res.status(400).json({ error: 'Invalid Password!' })
		const token = generateToken(
			{ _id: user._id, name: user.firstName, email: user.email, isAdmin: user.isAdmin },
			process.env.JWT_SECRET,
			'7h'
		)
		let cookieParams = {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
		}
		if (keepSignedIn) cookieParams = { ...cookieParams, maxAge: 1000 * 60 * 60 * 24 * 7 }
		res.cookie('access_token', token, cookieParams).status(200).json({ message: 'User Logged in succesfully!' })
	} catch (error) {
		console.log(error)
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
module.exports = { register, login }
