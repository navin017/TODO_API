const express = require('express');
const app = express();
const taskDetails = require('./dao/todoDetails');


app.get("/getAllTasks", async (req, res) => {
    let result = {
        code: 200,
        message: "",
        data: null,
    }
    try {
        let tasks = await taskDetails.getAllTasks();
        // console.log("tasks..: ", tasks); 
        if (tasks) {
            result = {
                data: tasks,
                message: "Task fetched succefully",
                code: 200,
            }
        }
        else {
            result = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(result);

    } catch (err) {
        // console.log("err..: ",err); 
        console.log("Error occurred in all tasks fetching API: ", err);
        result = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(result);
    }
});

app.get("/getTaskById", async (req, res) => {
    let result = {
        code: 200,
        message: "",
        data: null,
    }
    try {
        let taskId = req.query.taskId;
        let tasks = await taskDetails.getTaskById(taskId);
        // console.log("tasks..: ", tasks); 
        if (tasks) {
            result = {
                data: tasks,
                message: "Task fetched succefully",
                code: 200,
            }
        }

        else {
            result = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(result);
    } catch (err) {
        // console.log("err..: ", err); 
        console.log("Error occurred in all tasks fetching API: ", err);
        result = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(result);
    }
});

app.get("/createTask", async (req, res) => {
    let result = {
        code: 200,
        message: "",
        data: null,
    }
    try {
        let newTask = req.query.newTask;
        let tasks = await taskDetails.createTask(newTask);
        if (tasks) {
            result = {
                data: tasks,
                message: "Task created succefully",
                code: 200,
            }
        }
        else {
            result = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(result);

    } catch (err) {
        // console.log("err..: ", err); 
        console.log("Error occurred in all tasks fetching API: ", err);
        result = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(result);
    }
});

app.get("/updateTask", async (req, res) => {
    try {
        let taskId = req.query.taskId;
        let updatedTask = req.query.updatedTask;
        let tasks = await taskDetails.updateTask(taskId, updatedTask);
        if (tasks) {
            result = {
                data: tasks,
                message: "Task updated succefully",
                code: 200,
            }
        }
        else {
            result = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(result);

    } catch (err) {
        // console.log("err..: ", err); 
        console.log("Error occurred in all tasks fetching API: ", err);
        result = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(result);
    }
});

app.get("/deleteTask", async (req, res) => {
    try {
        let taskId = req.query.taskId;

        let tasks = await taskDetails.deleteTask(taskId);
        if (tasks) {
            result = {
                data: tasks,
                message: "Task deleted succefully",
                code: 200,
            }
        }
        else {
            result = {
                code: 500,
                message: "Error occurred while fetching all tasks",
                data: null,
            }
        }
        res.send(result);


    } catch (err) {
        // console.log("err..: ", err); 
        console.log("Error occurred in all tasks fetching API: ", err);
        result = {
            code: 500,
            message: "Error occurred while fetching all tasks",
            data: null,
        }
        res.send(result);
    }
});

const server = app.listen(5001, function () {
    console.log("Listening on port %s...", server.address().port);
}) 