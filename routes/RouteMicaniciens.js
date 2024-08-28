const express= require('express')
const router = express.Router();

const {register,
    getAllMicaniciens,
    login,
    getMicaniciens,Revenu} =require('../controllers/MicaniciensController')


//admin
router.post('/register',register)
router.get('/getAllMicaniciens',getAllMicaniciens)
router.post('/login',login)
router.get('/getMicaniciens/:MicanicienID',getMicaniciens)
router.post('/Revenu/:MicanicienID',Revenu)




module.exports= router