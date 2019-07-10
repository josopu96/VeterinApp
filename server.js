const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const usuario = require('./src/server/routes/usuario.route');
const cliente = require('./src/server/routes/cliente.route');
const globalModel = require('./src/server/routes/global.route');
const mascota = require('./src/server/routes/mascota.route');
const clinica = require('./src/server/routes/clinica.route');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use('/usuarios', usuario);
server.use('/clientes', cliente);
server.use('/global', globalModel);
server.use('/mascotas', mascota);
server.use('/clinicas', clinica);

var port = 443;
server.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});

 // Set up mongoose connection
 const mongoose = require('mongoose');
 var dev_db_url = 'mongodb+srv://admin:admin@frankfurtcluster-kdmjy.mongodb.net/VeterinApp';
 var mongoDB = process.env.MONGODB_URI || dev_db_url;
 mongoose.connect(mongoDB);
 mongoose.Promise = global.Promise;
 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));


server.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>')
})

