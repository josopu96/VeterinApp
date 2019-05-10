const express = require('express');
const cors = require('cors');
const router = express.Router();

const clinica_controller = require('../controllers/clinica.controller');

router.get('/', cors(), clinica_controller.getClinicas);
router.post('/:id', cors(), clinica_controller.getClinica);
router.get('/:id/veterinarios', cors(), clinica_controller.getVeterinarios);
router.get('/:id/veterinario/:veter_id', cors(), clinica_controller.getVeterinario);
router.post('/:id/veterinario/create', cors(), clinica_controller.createVeterinario);
router.post('/:id/veterinario/:veter_id/update', cors(), clinica_controller.updateVeterinario);
router.post('/:id/veterinario/:veter_id/delete', cors(), clinica_controller.deleteVeterinario)


module.exports = router;
