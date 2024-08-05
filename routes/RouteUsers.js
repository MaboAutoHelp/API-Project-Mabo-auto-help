const express = require('express');
const router = express.Router();
const { register ,login,updateUser } = require('../controllers/UsersControoller');

router.post('/register', register);
router.post('/login',login)
router.put('/updateUser/:UserId',updateUser)


module.exports = router;