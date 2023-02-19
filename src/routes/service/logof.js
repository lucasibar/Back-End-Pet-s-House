const { Users } = require("../../../db");


module.exports = {  
  logof: async function (usuarioID){
  await Users.update( {logged: false }, {
  where: {
      id: usuarioID
  }
});
  return `Se desloggeo exitosamente`
}
}