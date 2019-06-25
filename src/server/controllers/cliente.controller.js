const Cliente = require('../models/cliente.model');
var mongoose = require('mongoose');

exports.getClientes = function(req, res) {
  Cliente.find({}, function(err, clientes) {
      if (err)  {
          res.send(err);
      }
      res.send(clientes);
  });
};

exports.getCliente = function(req, res) {
  Cliente.findById(req.params.id, function(err, cliente) {
      if (err)  {
          res.send(err);
      }
      res.send(cliente);
  });
};

exports.createCliente = function (req, res) {
  let direccion = req.body.direccion ? req.body.direccion : "";
  let poblacion = req.body.poblacion ? req.body.poblacion : "";
  let codPostal = req.body.codPostal ? req.body.codPostal : "";
  let email = req.body.email ? req.body.email : "";
  let fecNac = req.body.fecNac ? req.body.fecNac : "";

  let cliente = new Cliente({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    dni: req.body.dni,
    direccion: direccion,
    poblacion: poblacion,
    codPostal: codPostal,
    email: email,
    fecNac: fecNac,
    fecModificacion: new Date(),
    contactos: [],
    facturas: [],
    cuidados: []
  });
  console.log(cliente);

  cliente.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send({ "response": 'Cliente creado satisfactoriamente' });
  });
};

exports.updateCliente = function (req, res) {
  let direccion = req.body.direccion ? req.body.direccion : "";
  let poblacion = req.body.poblacion ? req.body.poblacion : "";
  let codPostal = req.body.codPostal ? req.body.codPostal : "";
  let email = req.body.email ? req.body.email : "";
  let fecNac = req.body.fecNac ? req.body.fecNac : "";

  Cliente.findByIdAndUpdate(req.params.id, {
    $set: {
      "nombre"          : req.body.nombre,
      "apellidos"       : req.body.apellidos,
      "dni"             : req.body.dni,
      "direccion"       : direccion,
      "poblacion"       : poblacion,
      "codPostal"       : codPostal,
      "email"           : email,
      "fecNac"          : fecNac,
      "fecModificacion" : new Date()
    }
  }, {new: true}, function (err, usuario) {
    if (err) return next(err);
    res.send(usuario);
  });
}

exports.getContactos = function (req, res) {
  Cliente.findById(req.params.id, function (err, cliente) {
    if (err) res.status(404).send(err);
    console.log(cliente.contactos);
    res.send(cliente.contactos.filter(x => x.borrado == false));
  });
}

exports.addContacto = function (req, res) {
  var contacto = {
    '_id'          : new mongoose.mongo.ObjectId(),
    'nombre'       : req.body.nombre,
    'telefono'     : decodeURIComponent(req.body.telefono),
    'tipo'         : req.body.tipo,
    'borrado'      : false
  }
  console.log(contacto);
  Cliente.update(
    {'_id': req.params.id},
    { $push: { contactos: contacto }
  }, {new: true}, function (err, cliente) {
    console.log(err);
    if (err) res.send(err);
    res.status(200).send({ 'response': 'Contacto creado satisfactoriamente' });
  });
}

exports.deleteContacto = function (req, res) {
  Cliente.findOneAndUpdate(
    {'_id': req.params.id, 'contactos': { $elemMatch: {_id: req.body.contactoId }}
  }, {
    $set: {
      'contactos.$.borrado': true,
  }}, function (err, resp) {
    if (err) res.send(err);
    res.send(resp);
  });
}
