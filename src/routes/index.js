const { Router } = require('express');
const petsRoutes = require ('./routers/petsRoutes')
const userRoutes = require ('./routers/userRoutes')
const dataloadRoutes = require ('./service/dataloadRoutes')
const loginRoutes = require ('./service/loginRoutes')
const logofRoutes = require ('./service/logofRoutes')
var morgan = require('morgan')

const router = Router();
router.use(morgan('tiny'))

//SERVICE
router.use('/dataload', dataloadRoutes)

router.use('/login', loginRoutes)
router.use('/logof', logofRoutes)
//ROUTERS
router.use('/users', userRoutes)
router.use('/pets', petsRoutes)



module.exports = router;
