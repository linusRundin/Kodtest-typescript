const db2 = require("./database")
const DataTypes = require('sequelize');


/**
 * 
 */
const State = db2.define('State', {
    allComments: [],
    comments: [],
});



module.exports = State




  
