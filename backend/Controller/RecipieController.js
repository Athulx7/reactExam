const favorite = require("../Models/favSchema")
const recipe = require("../Models/recipieSchema")

exports.addReciepie = async(req,res)=>{
    console.log("inside add recipe controller")
    const {name,ingredient,instruction,cooktime} = req.body
    try{
        const adding = new recipe({
            name,
            ingredient,
            instruction,
            cooktime


        })
        await adding.save()
        res.status(201).json(adding)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.gettingREcipies = async(req,res)=>{
    // console.log("insinde grtting resicpees")

    try{

        const gets = await recipe.find()
        res.status(201).json(gets)
        
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.deleteRecipie = async(req,res)=>{
    console.log("inside delete reciepie controller")
    console.log(req.params)
    const {id} = req.params
    // console.log(id)

    try{

        const deting  = await recipe.findByIdAndDelete({_id:id})
        res.status(201).json(deting)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getSelected = async(req,res)=>{
    const {id} = req.params
    try{
        const getiingData = await recipe.findById(id)
        res.status(201).json(getiingData)

    }
    catch(err){
        res.status(401).json(err)
    }

}


exports.addToFAV = async(req,res)=>{
    console.log("inside add to fac controller")

    const {name,ingredient,instruction,cooktime,id} = req.body
   
    try{
        const adding = new favorite({
            name,
            ingredient,
            instruction,
            cooktime,
            id


        })
        await adding.save()
        res.status(201).json(adding)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.getFAVourites = async(req,res)=>{
    // console.log("inside get favourites ")
    try{
        const getFav = await favorite.find()
        res.status(201).json(getFav)

    }
    catch(err){
        res.status(401).json(err)

    }
}



exports.deletFAVREcipie = async(req,res)=>{
    // console.log("inside delete fav reciepie controller")
    // console.log(req.params)
    const {id} = req.params
    // console.log(id)

    try{

        const deting  = await favorite.findByIdAndDelete({_id:id})
        res.status(201).json(deting)

    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.viewSelected = async(req,res)=>{
    console.log("inside selected controller")
    
}


