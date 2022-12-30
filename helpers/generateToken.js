const jwt = require('jsonwebtoken')
function generateToken(data, secret, expiry) {
	const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: expiry })
	return token
}
module.exports = generateToken
