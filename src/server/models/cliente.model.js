const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactoSchema = new Schema({
  nombre:        {   type: String,  required: true   },
  telefono:      {   type: String,  required: true   },
  tipo:          {   type: String,  required: true   },
  _id:           {   type: mongoose.Schema.Types.ObjectId, required: true}
});

let facturaSchema = new Schema({

});

let cuidadoSchema = new Schema({

});

let clienteSchema = new Schema({
  nombre:          {   type: String,  required: true   },
  apellidos:       {   type: String,  required: true   },
  dni:             {   type: String,  required: true   },
  email:           {   type: String,  required: false  },
  direccion:       {   type: String,  required: false  },
  poblacion:       {   type: String,  required: false  },
  codPostal:       {   type: String,  required: false  },
  email:           {   type: String,  required: false  },
  fecNac:          {   type: Date,    required: false  },
  fecModificacion: {   type: Date,    required: true   },
  contactos:       [contactoSchema],
  facturas:        [facturaSchema],
  cuidados:        [cuidadoSchema]
});




module.exports = mongoose.model('Cliente', clienteSchema, 'Cliente');
