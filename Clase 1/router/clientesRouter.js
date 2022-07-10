const express =  require('express');
const router = express.Router();

const Cliente = require('../models/cliente');
// voy a evolver el codigo en un try catch
router.get('/', async (request, response)=>{
 try{
    // llamando el array de clientes desde mongodb
    const arrayClientesDBM = await Cliente.find();
    console.log(arrayClientesDBM);
    response.render("clientes", {
        arrayClientes: arrayClientesDBM
    })
 }catch (error){
    console.log(error)
 }
});
// router.get('/', (request, response) =>{
//     response.render("clientes", {
//         arrayClientes:[
//             {id: '1', nombre: 'Rodrigo', apellido: 'Silva'},
//             {id: '2', nombre: 'Maxi', apellido: 'Silva'},
//             {id: '3', nombre: 'María Ignacia', apellido: 'González'}

//         ]
//     })
// });

module.exports = router;

