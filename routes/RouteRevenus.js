const express= require('express')
const router = express.Router();

const {Revenus,getAllRevenus} =require('../controllers/RevenusController')


//admin
router.post('/Revenus',Revenus)
router.get('/getAllRevenus',getAllRevenus)




module.exports= router