const express = require('express');
const cors = require('cors');
const router = express.Router();

const mascota_controller = require('../controllers/mascota.controller');

router.get('/', cors(), mascota_controller.getMascotas);
router.get('/:id', cors(), mascota_controller.getMascota);
router.post('/create', cors(), mascota_controller.createMascota);
router.post('/:id/update', cors(), mascota_controller.updateMascota);

module.exports = router;
