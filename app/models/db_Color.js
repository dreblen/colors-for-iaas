var config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: (process.env.DB_HOST) ? process.env.DB_HOST : 'localhost',
    dialect: (process.env.DB_DIALECT) ? process.env.DB_DIALECT : 'mysql'
}

var Sequelize = require('sequelize');
var sequelize = new Sequelize('colors-for-iaas', config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

module.exports = Color = sequelize.define('color', {
    name: Sequelize.STRING,
    red: Sequelize.INTEGER,
    green: Sequelize.INTEGER,
    blue: Sequelize.INTEGER
});

Color.sync();