const { Router } = require('express');
const razaRoutes = require ('./razaRoutes')

var morgan = require('morgan')
const router = Router();

router.use(morgan('tiny'))

router.use('/dogs', razaRoutes)



module.exports = router;
