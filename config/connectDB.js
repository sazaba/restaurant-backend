const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(connect.connection.host)
    } catch (error) {
        console.log(error)
    }
}




module.exports = connectDB