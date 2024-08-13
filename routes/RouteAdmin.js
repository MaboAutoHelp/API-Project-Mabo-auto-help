const express= require('express')
const router = express.Router();

const {register,login,getAdmin} =require('../controllers/AdminController')


//admin
router.post('/register',register)
router.post('/login',login)
router.get('/getAdmin/:adminID',getAdmin)




module.exports= router