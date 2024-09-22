const express= require('express')
const router = express.Router();

const {register,login,getAdmin,getAllAdmin} =require('../controllers/AdminController')


//admin
router.post('/register',register)
router.post('/login',login)
router.get('/getAdmin/:adminID',getAdmin)
router.get('/getAllAdmin',getAllAdmin)




module.exports= router