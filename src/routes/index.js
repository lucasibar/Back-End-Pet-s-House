const { Router } = require('express');
//const { Pets, Users } = require("../db");
const petsRoutes = require ('./routers/petsRoutes')
const userRoutes = require ('./routers/userRoutes')
//const administrationRoutes = require ('./routers/administrationRoutes')
var morgan = require('morgan')

const router = Router();
router.use(morgan('tiny'))


//router.use('/', )


router.use('/users', userRoutes)

router.use('/pets', petsRoutes)

//router.use('/administration', adminValildationRol, administrationRoutes)

module.exports = router;
