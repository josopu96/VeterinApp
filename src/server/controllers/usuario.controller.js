const Usuario = require('../models/usuario.model');
var mongoose = require('mongoose');

exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.login = function (req, res) {
  Usuario.where({
    email: req.body.email
  }).findOne(function (err, usuario) {
    if (usuario) {
      if (usuario.clave == req.body.clave) {
        res.send(usuario);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(404);
    }
  });
}

exports.createUsuario = function (req, res) {
  let usuario = new Usuario({
    nombre: req.body.nombre,
    clave: req.body.clave,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    ajustes: {
      _id: new mongoose.mongo.ObjectID,
      tamLetra: "medio",
      tema: "oscuro",
      recordatorio: "0"
    }
  });

  usuario.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send({ "response": 'Usuario creado satisfactoriamente' });
  });
};

exports.displayUsuario = function (req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (err) {
      res.send(err);
    }
    res.send(usuario);
  });
};

exports.updateUsuario = function (req, res) {
  if (req.body.oldClave && req.body.clave) {
    _updateUsuarioConClave(req, res);
  } else {
    _updateUsuario(req, res, function (err, usuario) {
      if (err) return next(err);
      res.send(usuario);
    });
  }
};

function _updateUsuarioConClave(req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (usuario) {
      if (usuario.clave == req.body.oldClave) {
        Usuario.findByIdAndUpdate(req.params.id, {
          $set: {"clave": req.body.clave},
        }, {new: true}, function (err2, usuario) {
          if (err2) return next(err2);
          _updateUsuario(req, res, function (err, usuario) {
            if (err) return next(err);
            res.send(usuario);
          });
        });
      } else {
        res.status(404).send({ "response": 'La contraseña es incorrecta' });
      }
    }
  });
}

function _updateUsuario(req, res) {
  Usuario.findByIdAndUpdate(req.params.id, {
    $set: {
      "nombre": req.body.nombre,
      "email": req.body.email,
      "isAdmin": req.body.isAdmin,
    }
  }, {new: true}, function (err, usuario) {
    if (err) return next(err);
    res.send(usuario);
  });
}

exports.deleteUsuario = function (req, res) {
  Usuario.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send('Eliminado satisfactoriamente!');
  });
};

exports.getUserByToken = function (req, res) {
  Usuario.findById(req.params.id, function (err, usuario) {
    if (err) {
      res.send(err);
    }
    res.send(usuario);
  });
}

exports.updateAjustes = function (req, res) {

  Usuario.findById(req.params.id, function (err, usuario) {
    if (err) {
      res.send(err);
    }

    usuario.ajustes.tema = req.body.tema;
    usuario.ajustes.tamLetra = req.body.tamLetra;
    usuario.ajustes.recordatorio = req.body.recordatorio;
    usuario.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send(usuario);
    });
  });
};

exports.getUsuarios = function(req, res) {
  Usuario.find({}, function(err, usuarios) {
      if (err)  {
          res.send(err);
      }
      res.send(usuarios);
  });
};
