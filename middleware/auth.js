const jwt = require('jsonwebtoken')
function isLoggedIn(req, res, next) {
	try {
		const token = req.cookies.acces_token
		if (!token) return res.status(403).json({ error: 'Access token is required!' })
		try {
			const decoded = token && jwt.verify(token, process.env.JWT_SECRET)
			req.user = decoded
			next()
		} catch (error) {
			res.status(401).json({ error: 'Invalid token' })
		}
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}

function isAdmin(req, res, next) {
	try {
		if (!req.user.isAdmin) return res.status(401).json({ error: 'You are not an admin!' })
		next()
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong! \n' + error.message })
	}
}
