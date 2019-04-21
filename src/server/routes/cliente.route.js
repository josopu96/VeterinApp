const express = require('express');
const cors = require('cors');
const router = express.Router();

const cliente_controller = require('../controllers/cliente.controller');

router.get('/', cors(), cliente_controller.getClientes);
router.get('/:id', cors(), cliente_controller.getCliente);

module.exports = router;
