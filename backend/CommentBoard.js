const db2 = require("./database")

/**
 * The CommentBoard table
 * The CommentBoard table exist to connect comments that are
 * wirtten to the main page.
 * Commentboard has one attribute boardName.
 */
const CommentBoard = db2.define('CommentBoard', {
    boardName: String
});



module.exports = CommentBoard