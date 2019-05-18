const Clinica = require('../models/clinica.model');

exports.getClinicas = function(req, res) {
  Clinica.find({}, function(err, clinicas) {
      if (err)  {
          res.send(err);
      }
      res.send(clinicas);
  });
};

exports.getClinica = function(req, res) {
  Clinica.findById(req.params.id, function(err, clinica) {
      if (err)  {
          res.send(err);
      }
      res.send(clinica);
  });
};

exports.getVeterinarios = function(req, res) {
  Clinica.findById(req.params.id, function(err, resp) {
      if (err)  {
          res.send(err);
      }
      res.send(resp.veterinarios.filter(x => x.borrado == false));
  });
};

exports.getVeterinario = function(req, res) {
  Clinica.findOne({'_id': req.params.id, 'veterinarios': { $elemMatch: {_id: req.params.veter_id }}}, function(err, resp) {
      if (err)  {
          res.send(err);
      }
      if(resp)
        res.send(resp.veterinarios.find(x => x._id == req.params.veter_id));
      else
        res.send('404 NOT FOUND');
  });
};

exports.createVeterinario = function (req, res) {
  var tlf = req.body.telefono != "undefined" ? req.body.telefono : "";
  console.log(req.body.fecNac);
  var veterinario = {
    'nombre'       : req.body.nombre,
    'apellidos'    : req.body.apellidos,
    'fecNac'       : fechaNac,
    'dni'          : req.body.dni,
    'telefono'     : tlf,
    'numColegiado' : req.body.numColegiado,
    'borrado'      : false
  }

  Clinica.update(
    {'_id': req.params.id},
    { $push: { veterinarios: veterinario }},

  function (err) {
    console.log(err);
    if (err) {
      res.send(err);
    }
    res.send( {'respuesta': 'Veterinario creado satisfactoriamente'} );
  });
};

exports.updateVeterinario = function (req, res) {
  var tlf = req.body.telefono != "null" ? req.body.telefono : "";
  Clinica.findOneAndUpdate(
    {'_id': req.params.id, 'veterinarios': { $elemMatch: {_id: req.params.veter_id }}
  }, {
    $set: {
      'veterinarios.$.nombre'       : req.body.nombre,
      'veterinarios.$.apellidos'    : req.body.apellidos,
      'veterinarios.$.fecNac'       : req.body.fecNac,
      'veterinarios.$.dni'          : req.body.dni,
      'veterinarios.$.telefono'     : tlf,
      'veterinarios.$.numColegiado' : req.body.numColegiado,
  }}, function (err, resp) {
    res.send( {'respuesta': 'Veterinario editado satisfactoriamente'} );
  });
};

exports.deleteVeterinario = function (req, res) {
  Clinica.findOneAndUpdate(
    {'_id': req.params.id, 'veterinarios': { $elemMatch: {_id: req.params.veter_id }}
  }, {
    $set: {
      'veterinarios.$.borrado': true,
  }}, function (err, resp) {
    if (err) res.send(err);
    res.send(resp);
  });
};

