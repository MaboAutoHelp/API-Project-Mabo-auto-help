const express= require('express')
const router = express.Router();

const {register,login,getAdmin,getAllAdmin,updateAdmin,updateDeleteStatus,updateDeleteStatusYES,getAdminTelLieuMicanicien} =require('../controllers/AdminController')


//admin
router.post('/register',register)
router.post('/login',login)
router.get('/getAdmin/:adminID',getAdmin)
router.get('/getAllAdmin',getAllAdmin)
router.put('/updateAdmin/:id',updateAdmin)
router.put('/updateDeleteStatus/:id',updateDeleteStatus)
router.put('/updateDeleteStatusYES/:id',updateDeleteStatusYES)
router.get('/getAdminTelLieuMicanicien/:adminID',getAdminTelLieuMicanicien)




module.exports= router