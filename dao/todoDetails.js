const TaskDetails = require('../models/todoDetails')

const getAllTasks = async () => {
    try {
        let result = await TaskDetails.findAll({
        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const getTaskById = async (taskId) => {
    try {
        let result = await TaskDetails.findOne({
            where: {
                ID: taskId
            }
        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const createTask = async (data) => {
    try {
        let result = await TaskDetails.create({ task_name: data }, {

        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const updateTask = async (taskID, data) => {
    try {
        let result = await TaskDetails.update({ task_name: data }, {
            where: {
                ID: taskID
            }

        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

const deleteTask = async (taskId) => {
    try {
        let result = await TaskDetails.destroy({
            where: {
                ID: taskId
            }
        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

module.exports = {
    getAllTasks: getAllTasks,
    getTaskById: getTaskById,
    createTask: createTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
}