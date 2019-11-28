const express = require("express");
const router = express.Router();
const {
    userValidationRules,
    userValidateErrorHandling
} = require('../validators/validator');
const {
    getUsers,
    addUser,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/usersController");


router
    .route('/')
    .get(getUsers)
    .post(userValidationRules(), userValidateErrorHandling, addUser);

router
    .route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;