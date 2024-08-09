const express = require('express');
const router = express.Router();
const { registerService,getAllService,getAllServices } = require('../controllers/ServiceController');

router.post('/registerService', registerService);
router.get('/getAllService/:id', getAllService);
router.get('/getAllServices', getAllServices);



module.exports = router;