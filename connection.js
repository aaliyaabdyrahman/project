const mongoose = require('mongoose')

const dbconnect = async () =>{
    try {
        mongoose.connect(process.env.DB_CONNECT)
        console.log("is connected")
    } catch (error) {
        console.log("not connected")
    }
    
}

module.exports =dbconnect