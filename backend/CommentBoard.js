const db2 = require("./database")

const CommentBoard = db2.define('CommentBoard', {
    boardName: String
});



module.exports = CommentBoard