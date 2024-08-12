const express= require('express')
const router = express.Router();

const {register,getAllMicaniciens} =require('../controllers/MicaniciensController')


//admin
router.post('/register',register)
router.get('/getAllMicaniciens',getAllMicaniciens)




module.exports= router