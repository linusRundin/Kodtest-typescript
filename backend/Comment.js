const db2 = require("./database")
const CommentBoard = require("./CommentBoard")

/**
 * The Comment table
 * A comment has an author and a field named comment. 
 * comment contains the text written as a comment.
 */
const Comment = db2.define('Comment', {
    author: String,
    comment: String,
});



module.exports = Comment




  
