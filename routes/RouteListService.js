const express= require('express')
const router = express.Router();

const {register,getVservice,getListID,updateList} =require('../controllers/ListServiceController')

router.post('/register',register)
router.get('/getVservice/:V',getVservice)
router.get('/getListID/:id',getListID)
router.put('/updateList/:id',updateList)

module.exports= router