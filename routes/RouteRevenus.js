const express= require('express')
const router = express.Router();

const {Revenus,getAllRevenus,updatedRevenusAdmin} =require('../controllers/RevenusController')


//admin
router.post('/Revenus',Revenus)
router.get('/getAllRevenus',getAllRevenus)
router.put('/updatedRevenusAdmin/:id',updatedRevenusAdmin)




module.exports= router