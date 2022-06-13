const db2 = require("./database")
const CommentBoard = require("./CommentBoard")

const Comment = db2.define('Comment', {
    author: String,
    comment: String,
});



module.exports = Comment




  
