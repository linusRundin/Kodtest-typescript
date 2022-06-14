
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

db2.sync({force:true})

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

const deleteAllComments = async (req, res) => {
    await Comment.destroy({
        truncate: true
    });
    return res.send()
}


module.exports = {getAllComments, getComment, deleteAllComments, createComment}