const Cliente = require('../models/cliente.model');

exports.getClientes = function(req, res) {
  Cliente.find({}, function(err, clientes) {
      if (err)  {
          res.send(err);
      }
      res.send(clientes);
  });
};

exports.getCliente = function(req, res) {
  console.log("Parámetro id: "+req.params.id);
  Cliente.findById(req.params.id, function(err, cliente) {
      if (err)  {
          res.send(err);
      }
      res.send(cliente);
  });
};
