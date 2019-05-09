const express = require('express');
const cors = require('cors');
const router = express.Router();

const mascota_controller = require('../controllers/mascota.controller');

router.get('/', cors(), mascota_controller.getMascotas);
router.get('/:id', cors(), mascota_controller.getMascota);

module.exports = router;
