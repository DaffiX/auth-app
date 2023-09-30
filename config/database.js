//configure the DB connection
const Sequelize = require('sequelize');

const sequelize = new Sequelize('authdb', 'root', 'Alx-2022', {
    host: 'localhost',
    dialect: 'mysql',
});


module.exports = sequelize;