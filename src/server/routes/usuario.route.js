const express = require('express');
const cors = require('cors');
const router = express.Router();

const usuario_controller = require('../controllers/usuario.controller');

router.post('/login', cors(), usuario_controller.login);
router.get('/test', cors(), usuario_controller.test);
router.post('/create', cors(), usuario_controller.createUsuario);
router.get('/:id', cors(), usuario_controller.displayUsuario);
router.put('/:id/update', cors(), usuario_controller.updateUsuario);
router.delete('/:id', cors(), usuario_controller.deleteUsuario);
router.get('/token/:id', cors(), usuario_controller.getUserByToken);

module.exports = router;
