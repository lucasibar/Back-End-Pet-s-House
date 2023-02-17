const { Router } = require('express');
const petsRoutes = require ('./petsRoutes')
const filterRoutes = require('./filterRoutes')
<<<<<<< HEAD
// const temperamentoRoutes = require ('./temperamentoRoutes')
// const searchRoutes = require ('./searchRoutes')
=======

>>>>>>> 5783482e2134398ca7cddc3b448dd82fa9f17605
var morgan = require('morgan')
const router = Router();

router.use(morgan('tiny'))

router.use('/pets', petsRoutes)
router.use('/filter', filterRoutes)

module.exports = router;
