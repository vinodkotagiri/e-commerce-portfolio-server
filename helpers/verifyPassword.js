const bcrypt = require('bcryptjs')
async function verifyPassword(password, hashedPassword) {
	return bcrypt.compare(password, hashedPassword)
}
module.exports = verifyPassword
