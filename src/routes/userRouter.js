const express = require('express');
const router = express.Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser, filterUser, searchUser } = require("../controllers/userController");
const { validate, checkDuplicateEmail } = require('../middlewares/userValidator');


router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', validate, checkDuplicateEmail, createUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

router.post('/role', filterUser);


router.post('/search', searchUser);



module.exports = router;