const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
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
    }
})

const recipe = mongoose.model('recipe',recipeSchema)
module.exports = recipe