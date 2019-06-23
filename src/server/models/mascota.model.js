const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tratamientoSchema = new Schema({
  anamnesis:        { type: String, required: true },
  diagnostico:      { type: String, required: true },
  tipoTratamiento:  { type: String, required: true },
  fecha:            { type: Date,   required: true },
  fecModificacion:  { type: Date,   required: true },
});

let pruebaSchema = new Schema({
  concepto:         { type: String, required: true },
  categoria:        { type: String, required: true },
  tipoPrueba:       { type: String, required: true },
  fecModificacion:  { type: Date,   required: true },
})

let mascotaSchema = new Schema({
  nombre:           { type: String, required: true },
  chip:             { type: String, required: true },
  fecNac:           { type: Date,   required: true },
  fecBaj:           { type: Date,   required: false},
  fecModificacion:  { type: Date,   required: true },
  sexo:             { type: String, required: true },
  estado:           { type: String, required: true },
  pelo:             { type: String, required: true },
  capa:             { type: String, required: true },
  especie:          { type: String, required: true },
  raza:             { type: String, required: true },
  idCliente:        { type: String, required: true },
  tratamientos:     [tratamientoSchema],
  pruebas:          [pruebaSchema]
});


module.exports = mongoose.model('Mascota', mascotaSchema, 'Mascotas');
