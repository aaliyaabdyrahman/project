const expres = require ('express')
require('dotenv').config()
const app =expres()
app.use(expres.json())


const dbconnect =require('./connection')
dbconnect()

const guryoos  = require('./route/house_route')
const images=require('./route/image_route')
const users=require('./route/user_route')

app.listen(process.env.WEB_PORT,()=>{
    console.log("port is running")
})

app.use("/guryo",guryoos)
app.use("/image",images)
app.use("/user",users)
