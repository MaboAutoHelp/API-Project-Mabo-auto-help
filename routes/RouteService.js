const express = require('express');
const router = express.Router();
const { registerService,getAllService,getAllServices ,updateService,getAllServicesAccepted,getAllServicesRejected} = require('../controllers/ServiceController');

router.post('/registerService', registerService);
router.get('/getAllService/:id', getAllService);
router.get('/getAllServices', getAllServices);
router.put('/updateService/:ID', updateService);
router.get('/getAllServicesAccepted', getAllServicesAccepted);
router.get('/getAllServicesRejected', getAllServicesRejected);



module.exports = router;