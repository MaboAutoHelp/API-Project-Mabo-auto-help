const express= require('express')
const router = express.Router();

const {login, register,getZiza} =require('../controllers/ZizaController')



router.post('/register',register)
router.post('/login',login)
router.get('/getZiza',getZiza)




module.exports= router