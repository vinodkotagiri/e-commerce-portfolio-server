const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const PORT = 5000 || process.env.PORT
const authRoutes = require('./routes/route.auth')
const userRoutes = require('./routes/route.user')
const categoryRoutes = require('./routes/route.category')
const productRoutes = require('./routes/route.product')
const orderRoutes = require('./routes/route.order')
const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan('combined'))
app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.listen(PORT, () => {
	console.log('Server listening on port: ' + PORT)
	connectDB(process.env.MONGO_URI)
})
