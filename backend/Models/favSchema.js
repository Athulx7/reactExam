const mongoose = require('mongoose')

const favScema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    ingredient:{
        type:String,
        require:true
    },
    instruction:{
        type:String,
        require:true
    },
    cooktime:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true
    }
})

const favorite = mongoose.model('favorite',favScema)
module.exports = favorite