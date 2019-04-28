const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
//     _id:        {   type: String,  required: true   },
    nombre:     {   type: String,  required: true   },
    clave:      {   type: String,  required: true   },
    email:      {   type: String,  required: true   },
    isAdmin:    {   type: Boolean, required: true   },
    ajustes:    {   
        // _id: { type: String },
        tamLetra: { type: String },
        tema: { type: String },
        recortatorio: { type: Number }
       }
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'Usuario');
