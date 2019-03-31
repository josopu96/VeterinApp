const Usuario = require('../models/usuario.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createUsuario = function(req, res) {
    let usuario = new Usuario ({
        nombre: req.body.nombre,
        clave: req.body.clave,
        email: req.body.email,
        isAdmin: req.body.isAdmin
    });

    usuario.save (function (err) {
        if (err) {
            return next(err);
        }
        res.send('Usuario creado satisfactoriamente');
    });
};

exports.displayUsuario = function(req, res) {
    Usuario.findById(req.params.id, function(err, usuario) {
        if (err)  {
            res.send(err);
        }
        res.send(usuario);
    });
};

exports.updateUsuario = function(req, res) {
    Usuario.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, usuario) {
        if (err) res.send(err);
        res.send(usuario);
    });
};

exports.deleteUsuario = function (req, res) {
    Usuario.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Eliminado satisfactoriamente!');
    });
};