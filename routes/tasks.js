const express = require("express");
const router = express.Router();
const auth = require('../middleware/authenticator');
const isAdmin = require('../middleware/rolesAuthenticator');

const {
    getTasks,
    addTask,
    getTask,
    deleteTask,
    updateTask
} = require("../controllers/tasksController");

router
    .route('/')
    .get(getTasks)
    .post(addTask);

router
    .route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .put(updateTask);

module.exports = router;