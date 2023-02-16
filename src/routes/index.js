const { Router } = require('express');
const petsRoutes = require ('./petsRoutes')
// const temperamentoRoutes = require ('./temperamentoRoutes')
// const searchRoutes = require ('./searchRoutes')
var morgan = require('morgan')
const router = Router();

router.use(morgan('tiny'))
router.use('/pets', petsRoutes)


module.exports = router;
