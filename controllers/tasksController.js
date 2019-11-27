const Task = require("../models/Task");
const createError = require("http-errors");

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (e) {
        next(e);
    }
};

exports.addTask = async (req, res, next) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};

// tasks/:id
exports.getTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) throw new createError.NotFound();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};

exports.deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findAndDelete(req.params.id);
        if (!task) throw new createError.NotFound();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!task) throw new createError.NotFound();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};