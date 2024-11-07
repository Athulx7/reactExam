const express = require('express')

const router = new express.Router()

const ReipeController = require('../Controller/RecipieController')
const ReviewController = require('../Controller/ReviewController')

router.post('/addReciepie',ReipeController.addReciepie)
router.get('/getRecipies',ReipeController.gettingREcipies)
router.delete('/deletere/:id',ReipeController.deleteRecipie)
router.get('/getselected/:id',ReipeController.getSelected)

router.post('/addtofav',ReipeController.addToFAV)
router.get('/getfav',ReipeController.getFAVourites)

router.delete('/deletefav/:id',ReipeController.deletFAVREcipie)

router.get('/getselectedfromFav/:id',ReipeController.viewSelected)


router.post('/addreview',ReviewController.adingreview)
router.get('/getReview/:id',ReviewController.gettingReview)


module.exports = router