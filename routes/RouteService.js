const express = require('express');
const router = express.Router();
const { registerService,
    getAllService,getAllServices ,updateService,getAllServicesAccepted,
    getAllServicesRejected,getServiceID,deletedService,getAllServicesAttente,
    updateServiceIta,getServiceMicaniciens,getAllServicesReparation} = require('../controllers/ServiceController');

router.post('/registerService', registerService);
router.get('/getAllService/:id', getAllService);
router.get('/getAllServices', getAllServices);
router.put('/updateService/:ID', updateService);
router.get('/getAllServicesAccepted', getAllServicesAccepted);
router.get('/getAllServicesRejected', getAllServicesRejected);
router.get('/getServiceID/:id', getServiceID);
router.delete('/deletedService', deletedService);
router.get('/getAllServicesAttente', getAllServicesAttente);
router.put('/updateServiceIta/:ID', updateServiceIta);
router.get('/getServiceMicaniciens/:id', getServiceMicaniciens);
router.get('/getAllServicesReparation', getAllServicesReparation);



module.exports = router;