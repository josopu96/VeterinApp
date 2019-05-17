const Mascota = require('../models/mascota.model');
const Analitica = require('../models/cliente.model');

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
  var fecBaj = req.body.fecBaj != "undefined" && req.body.fecBaj != null ? req.body.fecBaj : null;
  let mascota = new Mascota ({
    nombre            : req.body.nombre,
    chip              : req.body.chip,
    fecNac            : req.body.fecNac,
    fecBaj            : fecBaj,
    fecModificacion   : req.body.fecModificacion,
    sexo              : req.body.sexo,
    estado            : req.body.estado,
    pelo              : req.body.pelo,
    capa              : req.body.capa,
    especie           : req.body.especie,
    raza              : req.body.raza,
  });

  mascota.save(function (err) {
    if (err) {
      res.send(err);
    }
    res.send('Mascota creada satisfactoriamente');
  });
};

exports.updateMascota = function (req, res) {
  console.log(req.body);
  var fecBaj = req.body.fecBaj != "undefined" && req.body.fecBaj != null ? req.body.fecBaj : null;
  req.body.fecBaj = fecBaj;
  console.log(req.body);
  Mascota.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function (err, mascota) {
    if (err) res.send(err);
    res.send(mascota);
  });
};

