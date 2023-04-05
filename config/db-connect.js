//Database Connectivity
const Sequelize = require('sequelize');

const sequelize = new Sequelize("todotask", "root", "root@12", {
    host: "localhost",
    dialect: 'mariadb'
});
//Authenticate to insert the data in table
sequelize
    .authenticate()
    .then(() => {
        console.log('DB connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database', err);
    });
//Exports the sequelize module
module.exports = sequelize;