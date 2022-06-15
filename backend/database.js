const  Sequelize = require("sequelize");

/**
 * This is the initializing of the database.
 * The database uses SQLlite.
 */
const db2 = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

module.exports = db2



