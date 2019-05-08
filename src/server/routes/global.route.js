const express = require('express');
const cors = require('cors');
const router = express.Router();

const global_controller = require('../controllers/global.controller');

router.get('/:usuarioId', cors(), global_controller.getGlobalByUserId);

module.exports = router;
