const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// datos para la conexion a mongoDB
const user = 'IgnaGonzAvi';
const password = '1234';
const dbname = 'empresa';
const uri = `mongodb+srv://${user}:${password}@cluster0.3qxca7l.mongodb.net/${dbname}?retryWrites=true&w=majority`

// me conecto a mongoDB
mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
.then( () =>{ console.log("base de datos conectada") })
.catch( () =>{ console.log(e) })

//motor de plantillas, definicion de rutas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

// especificación de las rutas a ocupar
app.use('/', require('./router/rutasWeb'));
app.use('/clientes', require('./router/clientesRouter'));
app.use('/proveedores', require('./router/proveedoresRouter'));

const PORT = 8090;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})