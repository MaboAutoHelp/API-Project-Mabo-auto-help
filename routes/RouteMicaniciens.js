const express= require('express')
const router = express.Router();

const {register} =require('../controllers/MicaniciensController')


//admin
router.post('/register',register)




module.exports= router