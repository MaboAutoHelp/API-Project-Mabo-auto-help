const express= require('express')
const router = express.Router();

const {login, register,getZiza,getZizaRevenus} =require('../controllers/ZizaController')



router.post('/register',register)
router.post('/login',login)
router.get('/getZiza',getZiza)
router.get('/getZizaRevenus/:ID',getZizaRevenus)




module.exports= router