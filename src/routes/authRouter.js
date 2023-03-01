const express = require('express');
const router = express.Router();

const { register, login } = require("../controllers/authController");
const { validate, checkDuplicateEmail, loginValidator } = require('../middlewares/userValidator');


router.post('/register', validate, checkDuplicateEmail, register);

router.post('/login', login);
// router.post('/login', loginValidator, login);


module.exports = router;