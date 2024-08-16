const express = require('express');
const router = express.Router();
const { register ,login,updateUser,getUser ,getAllUser} = require('../controllers/UsersControoller');

router.post('/register', register);
router.post('/login',login)
router.put('/updateUser/:UserId',updateUser)
router.get('/getUser/:UserId',getUser)
router.get('/getAllUser',getAllUser)


module.exports = router;