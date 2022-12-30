const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const PORT = 5000 || process.env.PORT
const app = express()
app.use(cors())
app.use(morgan('combined'))

app.listen(PORT, () => {
	console.log('Server listening on port: ' + PORT)
	connectDB(process.env.MONGO_URI)
})
