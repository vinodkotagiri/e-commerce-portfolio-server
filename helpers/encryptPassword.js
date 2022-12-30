const bcrypt = require('bcryptjs')
async function encryptPassword(password, salt) {
	const hashedPassword = await bcrypt.hashSync(password, salt)
	return hashedPassword
}
module.exports = encryptPassword
