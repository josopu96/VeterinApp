const Cliente = require('../models/cliente.model');

exports.getClientes = function(req, res) {
  Cliente.find({}, function(err, clientes) {
      if (err)  {
          res.send(err);
      }
      res.send(clientes);
  });
};
