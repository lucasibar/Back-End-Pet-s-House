const { Router } = require("express");
const petsRoutes = require("./routers/petsRoutes");
const userRoutes = require("./routers/userRoutes");
const dataloadRoutes = require("./service/dataloadRoutes");
const favoritesRoutes = require("./routers/favoritesRoutes");
const publicationsRoutes = require("./routers/publicationsRoutes");
const donacionRoutes = require("./routers/donacionRoutes");
const provinciasRoutes = require("./routers/provinciasRoutes");
var morgan = require("morgan");

const router = Router();
router.use(morgan("tiny"));

//SERVICE
router.use("/dataload", dataloadRoutes);
//ROUTERS
router.use("/users", userRoutes);
router.use("/pets", petsRoutes);
router.use("/favorites", favoritesRoutes);
router.use("/publications", publicationsRoutes);
//DONACIONES
router.use("/donaciones", donacionRoutes);
//PROVINCIAS Y LOCALIDADES
router.use("/provincias", provinciasRoutes);
module.exports = router;
