const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let globalSchema = new Schema({
  usuarioId:    {   type: String,   required: true   },
  recordarPass: {   type: Boolean,  required: true   },
});

module.exports = mongoose.model('Global', globalSchema, 'Global');
