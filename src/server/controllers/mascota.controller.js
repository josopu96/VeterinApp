const Mascota = require('../models/mascota.model');
const Analitica = require('../models/cliente.model');
const Cliente = require('../models/cliente.model');
var mongoose = require('mongoose');

exports.getMascotas = function(req, res) {
  Mascota.find({}, function(err, mascotas) {
      if (err)  {
          res.send(err);
      }
      res.send(mascotas);
  });
};

exports.getMascota = function(req, res) {
  Mascota.findById(req.params.id, function(err, mascota) {
      if (err)  {
          res.send(err);
      }
      res.send(mascota);
  });
};

exports.createMascota = function (req, res) {
  let mascota = new Mascota ({
    nombre            : req.body.nombre,
    chip              : req.body.chip,
    fecNac            : req.body.fecNac,
    fecBaj            : req.body.fecBaj,
    fecModificacion   : req.body.fecModificacion,
    sexo              : req.body.sexo,
    estado            : req.body.estado,
    pelo              : req.body.pelo,
    capa              : req.body.capa,
    especie           : req.body.especie,
    raza              : req.body.raza,
    idCliente         : req.body.idCliente,
  });

  var hoy = new Date();

  mascota.save(function (err) {
    if (err) {
      res.send(err);
    }

    Cliente.findById(req.body.idCliente, function (err, cliente) {
      if (err) {
        res.send(err);
      } else {
        var cuidados = cliente.cuidados;

        var nuevoCuidado = {
          _id: new mongoose.mongo.ObjectID,
          fechaInicio: hoy,
          idMascota: mascota._id
        };
        cuidados.push(nuevoCuidado);

        cliente.save(function (err) {
          if (err) {
            res.send(err);
          } else {
            res.send({'cliente': cliente, 'mascota':  mascota});
          }
        });
      }
    });
    
  });
};

exports.updateMascota = function (req, res) {
  Mascota.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (err, mascota) {
    if (err) res.send(err);
    res.send(mascota);
  });
};

