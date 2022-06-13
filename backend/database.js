const  Sequelize = require("sequelize");


const db2 = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

module.exports = db2



