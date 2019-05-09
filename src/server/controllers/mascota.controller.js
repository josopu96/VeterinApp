const Mascota = require('../models/mascota.model');

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
