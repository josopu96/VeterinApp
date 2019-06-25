const express = require('express');
const cors = require('cors');
const router = express.Router();

const cliente_controller = require('../controllers/cliente.controller');

router.get('/', cors(), cliente_controller.getClientes);
router.get('/:id', cors(), cliente_controller.getCliente);
router.post('/create', cors(), cliente_controller.createCliente);
router.post('/:id/update', cors(), cliente_controller.updateCliente);
router.post('/:id/addContacto', cors(), cliente_controller.addContacto);
router.post('/:id/removeContacto', cors(), cliente_controller.deleteContacto);
router.get('/:id/contactos', cors(), cliente_controller.getContactos);

module.exports = router;
