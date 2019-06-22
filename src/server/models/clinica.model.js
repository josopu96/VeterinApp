const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let veterinarioSchema = new Schema({
  nombre:        {   type: String,  required: true   },
  apellidos:     {   type: String,  required: true   },
  fecNac:        {   type: Date,    required: false   },
  dni:           {   type: String,  required: true   },
  telefono:      {   type: String,  required: false   },
  numColegiado:  {   type: String,  required: true   },
  borrado:       {   type: Boolean, required: true   },
});

let stockSchema = new Schema({
  lote:          {   type: String,  required: true   },
  unidades:      {   type: String,  required: true   },
  fecCompra:     {   type: Date,    required: true   },
  fecCad:        {   type: Date,    required: true   },
})

let productoSchema = new Schema({
  nombre:        {   type: String,  required: true   },
  precioCompra:  {   type: String,  required: true   },
  precioVenta:   {   type: String,  required: true   },
  indicaciones:  {   type: String,  required: true   },
  stocks:        [stockSchema]
});

let clinicaSchema = new Schema({
  cif:              {   type: String, required: true   },
  nombre:           {   type: String, required: true   },
  direccion:        {   type: String, required: true   },
  telefono:         {   type: String, required: true   },
  movil:            {   type: String, required: true   },
  fax:              {   type: String, required: true   },
  poblacion:        {   type: String, required: true   },
  provincia:        {   type: String, required: true   },
  pais:             {   type: String, required: true   },
  codPostal:        {   type: String, required: true   },
  web:              {   type: String, required: true   },
  email:            {   type: String, required: true   },
  imagen:           {   type: String, required: true   },
  propietario:      {   type: String, required: true   },
  dniPropietario:   {   type: String, required: true   },
  veterinarios:     [veterinarioSchema],
  productos:        [productoSchema]
});

module.exports = mongoose.model('Clinica', clinicaSchema, 'Clinica');
