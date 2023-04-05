//CRUD operation Logics
const TaskDetails = require('../models/todoDetails')

//To the all datas in the Table
const getAllTasks = async () => {
    try {
        let result = await TaskDetails.findAll({
        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

//To get a specific data from the table
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

//To create or insert a new data into the table
const createTask = async (data) => {
    try {
        let result = await TaskDetails.create({ task_name: data }, {

        })
        return JSON.parse(JSON.stringify(result));
    } catch (err) {
        console.log("Error..: ", err);
    }
}

//To update the existing data in the table
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

//To delete the existing data from the table
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

//Exporting all the above functions
module.exports = {
    getAllTasks: getAllTasks,
    getTaskById: getTaskById,
    createTask: createTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
}