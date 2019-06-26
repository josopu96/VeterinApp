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
          fechaInicio: req.body.fecModificacion,
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
  console.log(req.body);
  Mascota.findByIdAndUpdate(req.params.id, {
    $set: {
      "nombre"              : req.body.nombre,
      "chip"                : req.body.chip,
      "fecNac"              : req.body.fecNac,
      "fecModificacion"     : new Date(),
      "sexo"                : req.body.sexo,
      "estado"              : req.body.estado,
      "pelo"                : req.body.pelo,
      "capa"                : req.body.capa,
      "especie"             : req.body.especie,
      "raza"                : req.body.raza,
      "fecBaj"              : req.body.fecBaj != "null" ? req.body.fecBaj : null
    }
  }, function (err, mascota) {
    if (err){
      res.send(err);
    } else {
      res.send(mascota);
    }
  });
};

exports.getTratamientos = function (req, res) {
  Mascota.findById(req.params.id, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      res.send(mascota1.tratamientos);
    }
  })
}

exports.crearTratamiento = function (req, res) {
  Mascota.findById(req.body.mascotaId, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      var nuevoTratamiento = {
        anamnesis: req.body.anamnesis,
        diagnostico: req.body.diagnostico,
        tipoTratamiento: req.body.tipoTratamiento,
        fecha: req.body.fecha,
        fecModificacion: new Date()
      }
      Mascota.findByIdAndUpdate(req.body.mascotaId, {
        $push: { "tratamientos": nuevoTratamiento },
      }, {new: true}, function (err2, mascota2) {
        if (err2) {
          res.status(404).send(err2);
        } else if (mascota2) {
          res.send(mascota2);
        }
      })
    }
  })
}

exports.updateTratamiento = function (req, res) {
  Mascota.findOneAndUpdate(
    {'_id': req.params.id, 'tratamientos': { $elemMatch: {_id: req.params.idTratamiento }}
  }, {
    $set: {
      'tratamientos.$.anamnesis'        : req.body.anamnesis,
      'tratamientos.$.diagnostico'      : req.body.diagnostico,
      'tratamientos.$.tipoTratamiento'  : req.body.tipoTratamiento,
      'tratamientos.$.fecha'            : req.body.fecha,
      'tratamientos.$.fecModificacion'  : new Date()
  }}, function (err, resp) {
    res.status(200).send( {'respuesta': 'Tratamiento editado satisfactoriamente'} );
  });
}

exports.getPruebas = function (req, res) {
  Mascota.findById(req.params.id, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      res.send(mascota1.pruebas);
    }
  })
}

exports.crearPrueba = function (req, res) {
  Mascota.findById(req.body.mascotaId, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      var nuevaPrueba = {
        concepto: req.body.concepto,
        categoria: req.body.categoria,
        tipoPrueba: req.body.tipoPrueba,
        fecModificacion: new Date()
      }
      Mascota.findByIdAndUpdate(req.body.mascotaId, {
        $push: { "pruebas": nuevaPrueba },
      }, {new: true}, function (err2, mascota2) {
        if (err2) {
          res.status(404).send(err2);
        } else if (mascota2) {
          res.send(mascota2);
        }
      })
    }
  })
}

exports.getVacunas = function (req, res) {
  Mascota.findById(req.params.id, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      res.send(mascota1.vacunas);
    }
  })
}

exports.crearVacuna = function (req, res) {
  Mascota.findById(req.body.mascotaId, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      var nuevaVacuna = {
        vacuna: req.body.vacuna,
        fecha: req.body.fecha,
        fecModificacion: new Date()
      }
      Mascota.findByIdAndUpdate(req.body.mascotaId, {
        $push: { "vacunas": nuevaVacuna },
      }, {new: true}, function (err2, mascota2) {
        if (err2) {
          res.status(404).send(err2);
        } else if (mascota2) {
          res.send(mascota2);
        }
      })
    }
  })
}

exports.getDesparasitaciones = function (req, res) {
  Mascota.findById(req.params.id, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      res.send(mascota1.desparasitaciones);
    }
  })
}

exports.crearDesparasitacion = function (req, res) {
  Mascota.findById(req.body.mascotaId, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      var nuevaDesparasitacion = {
        desparasitacion: req.body.desparasitacion,
        fecha: req.body.fecha,
        fecModificacion: new Date()
      }
      Mascota.findByIdAndUpdate(req.body.mascotaId, {
        $push: { "desparasitaciones": nuevaDesparasitacion },
      }, {new: true}, function (err2, mascota2) {
        if (err2) {
          res.status(404).send(err2);
        } else if (mascota2) {
          res.send(mascota2);
        }
      })
    }
  })
}

exports.getAnaliticas = function (req, res) {
  Mascota.findById(req.params.id, function (err1, mascota1) {
    if (err1) {
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      res.send(mascota1.analiticas);
    }
  })
}

exports.crearAnalitica = function (req, res) {
  console.log("entramos en crear analítica");
  Mascota.findById(req.body.mascotaId, function (err1, mascota1) {
    if (err1) {
      console.log("tenemos fallo 404");
      console.log(err1);
      res.status(404).send('Mascota no encontrada');
    } else if (mascota1) {
      console.log("NO tenemos fallo 404");
      var nuevaAnalitica = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        resultado: req.body.resultado,
        fecha: req.body.fecha,
        fecModificacion: new Date()
      }
      Mascota.findByIdAndUpdate(req.body.mascotaId, {
        $push: { "analiticas": nuevaAnalitica },
      }, {new: true}, function (err2, mascota2) {
        if (err2) {
          console.log("tenemos fallo 404 a la segunda");
          console.log(err2);
          res.status(404).send(err2);
        } else if (mascota2) {
          console.log("NO tenemos fallo 404");
          console.log(mascota2);
          res.send(mascota2);
        }
      })
    }
  })
}
