/**
 * This file contains all the server functionality
 */
const db2 = require("./database")
const CommentBoard = require("./CommentBoard")
const Comment = require("./Comment")


Comment.associate = models => {
    Comment.belongsTo(Comment, {
        foreignKey: {
            allowNull: true
        },
});
}


Comment.associate = models => {
    Comment.belongsTo(CommentBoard, {
        foreignKey: {
            allowNull: true
        },
});
}

Comment.hasMany(Comment)
CommentBoard.hasMany(Comment);

/**
 * Drops all tables and recreates them
 */
db2.sync({force:true})


/**
 * This function returns all comments posted on the main page
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getAllComments = async (req, res) => {
    const boardExist = await CommentBoard.findAll({ where : {id: 1}} );
    if (boardExist !== []){
        CommentBoard.create({
            boardName: "CommentBoard"
        }).then(
            console.log("Ready")
        );
        CommentBoard.sync()
    }

    const allComments = await CommentBoard.findAll({ where : {id: 1} ,
        include: [Comment]
    });

    
    return res.send(allComments[0].Comments)
}

/**
 * This function adds a comment.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const createComment = async (req, res) => {
    const { name, text, commentId, commentBoardId} = req.body;
    const boardExist = await CommentBoard.findAll({ where : {id: 1}} );
    if (boardExist !== []){
        CommentBoard.create({
            boardName: "CommentBoard"
        }).then(
            console.log("Ready")
        );
        CommentBoard.sync()
    }
    let newComment = await Comment.create({
        author: name,
        comment: text,
        CommentId: commentId,
        CommentBoardId: commentBoardId
    });

    return res.send(newComment);
}

/**
 * This function returns the comments that
 *  are connected to the specifeid id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const getComment = async (req, res) => {
    const commentId = req.params.id;
    const allComments = await Comment.findAll({ where : {id: commentId} ,
        include: [Comment]
    });
    if (allComments[0].Comments.lenght !== 0){
        return res.send(allComments[0].Comments)
    } else{
        return res.send([])
    }
    
}

/**
 * This is a function for deleting everything in the table Comment
 * It is not used.
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deleteAllComments = async (req, res) => {
    await Comment.destroy({
        truncate: true
    });
    return res.send()
}


module.exports = {getAllComments, getComment, deleteAllComments, createComment}