const mongoose  = require('mongoose')

const reviewSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    review:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    recipieid:{
        type:String,
        require:true
    }

})

const reviews = mongoose.model('reviews',reviewSchema)
module.exports = reviews