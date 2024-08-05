const express = require('express');
const router = express.Router();
const { register ,login,updateUser,getUser } = require('../controllers/UsersControoller');

router.post('/register', register);
router.post('/login',login)
router.put('/updateUser/:UserId',updateUser)
router.get('/getUser/:UserId',getUser)


module.exports = router;