//user model
const Sequelize = require('sequelize');
const sequelize = require('../config/database');


const User = sequelize.define('user', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});



module.exports = User;