const express = require('express');
const userController = require('../../../controllers/settings/user-management/user.controller');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createNewUser);
router.put('/', userController.editUser);
router.get('/getUserById/:id', userController.getUserById);

module.exports = router;
