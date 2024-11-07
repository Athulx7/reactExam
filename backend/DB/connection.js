const mongoose = require('mongoose')

const connestion = process.env.DB

mongoose.connect(connestion).then((res)=>{
    console.log("mongo Db is connected")
}).catch((err)=>{
    console.log("mongo DB conection faild due to")
    console.log(err)
})