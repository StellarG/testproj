const Sequelize = require('sequelize');
const config = {};

config.db = new Sequelize('test', 'postgres', '123456',{
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    logging: false
});

module.exports = config;