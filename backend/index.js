require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')


const examServer = express()
examServer.use(cors())
examServer.use(express.json())
examServer.use(router)


const PORT = 3001

examServer.listen(PORT,()=>{
    console.log(`exam server is running ${PORT}`)
})

examServer.get('/',(req,res)=>{
    res.send("the exam server is runnnig ")
})