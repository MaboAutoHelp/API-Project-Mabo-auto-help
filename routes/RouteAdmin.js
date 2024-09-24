const express= require('express')
const router = express.Router();

const {register,login,getAdmin,getAllAdmin,updateAdmin,updateDeleteStatus} =require('../controllers/AdminController')


//admin
router.post('/register',register)
router.post('/login',login)
router.get('/getAdmin/:adminID',getAdmin)
router.get('/getAllAdmin',getAllAdmin)
router.put('/updateAdmin/:id',updateAdmin)
router.put('/updateDeleteStatus/:id',updateDeleteStatus)




module.exports= router