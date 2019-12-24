const Task = require("../models/Task");
const createError = require("http-errors");

exports.getTasks = async (req, res, next) => {
    // An Admin should get everybody's tasks, a user only theirs
    try {
        const tasks = await Task.find()
            .select('owner text progress -_id')
            .where('done')
            .equals('false')
            .sort('owner');
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
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) throw new createError.NotFound();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};

exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!task) throw new createError.NotFound();
        res.status(200).send(task);
    } catch (e) {
        next(e);
    }
};