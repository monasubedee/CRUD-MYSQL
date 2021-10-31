const express = require('express');
const { getUserList, createOneUser, getSingleUser, updateUser,deleteUser } = require('../controllers/user');



const router = express.Router();


router.get('/', getUserList);

router.get('/:id', getSingleUser)

router.post('/', createOneUser);

router.patch('/:id', updateUser);

router.delete('/:id',deleteUser)



module.exports = router;