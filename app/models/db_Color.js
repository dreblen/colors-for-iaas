var config = JSON.parse(require('fs').readFileSync(__dirname + '/db.conf', {encoding:'utf-8'}));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('colors-for-iaas', config.username, config.password);

module.exports = Color = sequelize.define('color', {
    name: Sequelize.STRING,
    red: Sequelize.INTEGER,
    green: Sequelize.INTEGER,
    blue: Sequelize.INTEGER
});

Color.sync();