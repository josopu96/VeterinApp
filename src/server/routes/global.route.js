const express = require('express');
const cors = require('cors');
const router = express.Router();

const global_controller = require('../controllers/global.controller');

router.get('/login', cors(), global_controller.getGlobalLogin);
router.post('/updateLogin', cors(), global_controller.updateGlobalLogin);


module.exports = router;
