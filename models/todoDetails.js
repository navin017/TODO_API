//the models of the data's in the table
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/db-connect');

const TaskDetails = sequelize.define('TaskDetails', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name: DataTypes.STRING,

}, {
    tableName: 'task_list',
    timestamps: false
});

module.exports = TaskDetails;