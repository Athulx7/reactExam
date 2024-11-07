const reviews = require("../Models/reviewSchema")

exports.adingreview = async(req,res)=>{
    // console.log("inside adding review conrtoller")

    // console.log(req.body)
    const {username,review,rating,recipieid} = req.body
    try{

        const adding = new reviews({
            username,
            review,
            rating,
            recipieid

        })
        await adding.save()
        res.status(201).json(adding)


        
    }
    catch(err){
        res.status(401).json(err)
    }
}


exports.gettingReview = async(req,res)=>{
    // console.log("inside getting review cotroller")
    const {id} = req.params
    try{

        const getting = await reviews.find({recipieid:id})
        res.status(201).json(getting)

    }
    catch(err){
        res.status(401).json(err)
    }

}