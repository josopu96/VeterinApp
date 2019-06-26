const express = require('express');
const cors = require('cors');
const router = express.Router();

const mascota_controller = require('../controllers/mascota.controller');

router.get('/', cors(), mascota_controller.getMascotas);
router.get('/:id', cors(), mascota_controller.getMascota);
router.post('/create', cors(), mascota_controller.createMascota);
router.post('/:id/update', cors(), mascota_controller.updateMascota);
router.get('/:id/tratamientos', cors(), mascota_controller.getTratamientos);
router.post('/addTratamiento', cors(), mascota_controller.crearTratamiento);
router.post('/:id/updateTratamiento/:idTratamiento', cors(), mascota_controller.updateTratamiento);
router.get('/:id/pruebas', cors(), mascota_controller.getPruebas);
router.post('/addPrueba', cors(), mascota_controller.crearPrueba);
router.get('/:id/vacunas', cors(), mascota_controller.getVacunas);
router.post('/addVacuna', cors(), mascota_controller.crearVacuna);
router.get('/:id/desparasitaciones', cors(), mascota_controller.getDesparasitaciones);
router.post('/addDesparasitacion', cors(), mascota_controller.crearDesparasitacion);
router.get('/:id/analiticas', cors(), mascota_controller.getAnaliticas);
router.post('/addAnaliticas', cors(), mascota_controller.crearAnalitica);

module.exports = router;
