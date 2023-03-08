const { Router } = require('express'); 
const { getReviews} = require("../controlers/controllersReviews/getReviews")
const { postReview} = require("../controlers/controllersReviews/postReview")
const { deletReview} = require("../controlers/controllersReviews/deletReview")

const reviewsRoutes = Router();

reviewsRoutes.get('/', async (req, res)=>{
    try{
    res.status(200).json(await getReviews())}
    catch(error){res.status(400).json({Error: error.message})} 
})
reviewsRoutes.post('/',  async (req, res)=>{
    const { idUser, comentario, estrellas } = req.body
    try{res.status(200).json( await postReview(idUser, comentario, estrellas))}
    catch(error){res.status(400).json({Error: error.message})} 
})
reviewsRoutes.delete('/',  async (req, res)=>{
    const { idReviews } = req.body
    try{res.status(200).json( await deletReview(idReviews))}
    catch(error){res.status(400).json({Error: error.message})} 
})




module.exports = reviewsRoutes