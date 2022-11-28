const dotenv = require('dotenv').config()
const express = require('express')

const connectDB = require('./config/connectDB')
const productRoutesId = require('./routes/products/productId')
const productRoutes = require('./routes/products/index')
const orderRoutesId = require('./routes/orders/orderId')
const orderRoutes = require('./routes/orders/index')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(cors(
    {
        origin: ['http://localhost:3000']
    },
))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/order', orderRoutes)
app.use('/api/prodid', productRoutesId)
app.use('/api/prod', productRoutes)
app.use('/api/orderid', orderRoutesId)




const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING ON ${PORT}`)
        })
    } catch (error) {
        console.log(error)

    }
};

startServer()







