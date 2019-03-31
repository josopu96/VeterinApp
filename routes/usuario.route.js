const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuario.controller');

router.get('/test', usuario_controller.test);
router.post('/create', usuario_controller.createUsuario);
router.get('/:id', usuario_controller.displayUsuario);
router.put('/:id/update', usuario_controller.updateUsuario);
router.delete('/:id', usuario_controller.deleteUsuario);

module.exports = router;
