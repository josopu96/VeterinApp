const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactoSchema = new Schema({
    nombre:             { type: String, required: true },
    telefono:           { type: String, required: true },
    tipo:               { type: String, required: true },
    _id:                { type: mongoose.Schema.Types.ObjectId, required: true}
});

let operacionSchema = new Schema({
    idOperacion:        { type: String, required: true },
    tipo:               { type: String, required: true },
    precio:             { type: Number, required: true },
    concepto:           { type: String }
});

let itemFacturaSchema = new Schema({
    cantidad:           { type: Number, required: true },
    precioVenta:        { type: Number, required: true },
    iva:                { type: Number, required: true },
    idProducto:         { type: String, required: true }
});

let cuidadoSchema = new Schema({
    _id:                { type: mongoose.Schema.Types.ObjectId, required: true},
    fechaInicio:        { type: String, required: true  },
    fechaFin:           { type: String, required: false },
    idMascota:          { type: String, required: true  }
});

let facturaSchema = new Schema({
    numero:             { type: String, required: true },
    fecha:              { type: Date,   required: true },
    importeTotal:       { type: Number, required: true },
    tipoPago:           { type: String, required: true },
    estado:             { type: String, required: true },
    porcentajeTarifa:   { type: Number, required: true },
    operaciones:        [ operacionSchema   ],
    itemsFactura:       [ itemFacturaSchema ],
});

let clienteSchema = new Schema({
    nombre:             { type: String,   required: true  },
    apellidos:          { type: String,   required: false },
    direccion:          { type: String,   required: false },
    poblacion:          { type: String,   required: false },
    codPostal:          { type: Number,   required: false },
    email:              { type: String,   required: false },
    fecNac:             { type: Date,     required: false },
    fecModificacion:    { type: Date,     required: true  },
    contactos:          [ contactoSchema ],
    facturas:           [ facturaSchema  ],
    cuidados:           [ cuidadoSchema  ]
});




module.exports = mongoose.model('Cliente', clienteSchema, 'Cliente');
