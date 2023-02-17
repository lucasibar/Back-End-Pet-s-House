const { Router } = require('express');
const petsRoutes = require ('./petsRoutes')
const filterRoutes = require('./filterRoutes')

var morgan = require('morgan')
const router = Router();

router.use(morgan('tiny'))

router.use('/pets', petsRoutes)
router.use('/filter', filterRoutes)

module.exports = router;
