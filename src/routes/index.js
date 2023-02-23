const { Router } = require('express');
const petsRoutes = require ('./routers/petsRoutes')
const userRoutes = require ('./routers/userRoutes')
const dataloadRoutes = require ('./service/dataloadRoutes')
const favoritesRoutes = require('./routers/favoritesRoutes');
var morgan = require('morgan');

const router = Router();
router.use(morgan('tiny'))

//SERVICE
router.use('/dataload', dataloadRoutes)

//ROUTERS
router.use('/users', userRoutes)
router.use('/pets', petsRoutes)
router.use('/favorites', favoritesRoutes)


module.exports = router;
