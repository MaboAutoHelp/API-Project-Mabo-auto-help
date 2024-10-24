const express= require('express')
const router = express.Router();

const {register,getVservice} =require('../controllers/ListServiceController')

router.post('/register',register)
router.get('/getVservice/:V',getVservice)

module.exports= router