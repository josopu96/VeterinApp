const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre:     {   type: String,  required: true    },
    clave:      {   type: String,  required: true    },
    email:      {   type: String,  required: true     },
    isAdmin:    {   type: Boolean, required: true    }
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuario');
