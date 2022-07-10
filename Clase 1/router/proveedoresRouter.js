const express =  require('express');
const router = express.Router();

const Proveedor = require('../models/proveedor');
// voy a evolver el codigo en un try catch
router.get('/', async (request, response)=>{
 try{
    // llamando el array de clientes desde mongodb
    const arrayProveedoresDBM = await Proveedor.find();
    console.log(arrayProveedoresDBM);
    response.render("proveedores", {
        arrayProveedores: arrayProveedoresDBM
    })
 }catch (error){
    console.log(error)
 }
});


module.exports = router;