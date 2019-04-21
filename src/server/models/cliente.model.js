const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clienteSchema = new Schema({
  
});

module.exports = mongoose.model('Cliente', clienteSchema, 'Cliente');
