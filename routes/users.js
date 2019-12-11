const express = require("express");
const router = express.Router();
const {
    userValidationRules,
    userValidateErrorHandling
} = require("../validators/validator");

const {
    getUsers,
    addUser,
    getUser,
    deleteUser,
    updateUser
} = require("../controllers/usersController");

const isAdmin = require("../middleware/rolesAuthenticator");
const auth = require("../middleware/authenticator");

router
    .route("/")
    .get(getUsers)
    .post(addUser);

router
    .route("/:id")
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser);

module.exports = router;