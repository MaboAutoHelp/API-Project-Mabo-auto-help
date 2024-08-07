const express = require('express');
const router = express.Router();
const { registerService,getAllService } = require('../controllers/ServiceController');

router.post('/registerService', registerService);
router.get('/getAllService/:id', getAllService);



module.exports = router;