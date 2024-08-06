const express = require('express');
const router = express.Router();
const { registerService } = require('../controllers/ServiceController');

router.post('/registerService', registerService);



module.exports = router;