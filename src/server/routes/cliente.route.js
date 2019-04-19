const express = require('express');
const cors = require('cors');
const router = express.Router();

const cliente_controller = require('../controllers/cliente.controller');

router.get('/', cors(), cliente_controller.getClientes);

module.exports = router;
