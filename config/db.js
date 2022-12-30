const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
async function connectDB(URI) {
	try {
		await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('Connected to Database')
	} catch (error) {
		console.log({ error: error.message, stack: error.stack })
	}
}
module.exports = connectDB
