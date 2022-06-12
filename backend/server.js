const  Sequelize = require("sequelize");


const db2 = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});


const Comment = db2.define('Comment', {
    author: String,
    comment: String,
});

const CommentBoard = db2.define('CommentBoard', {
    boardName: String
});

db2.sync();

CommentBoard.create({
    boardName: "CommentBoard"
}).then(
    console.log("Ready")
);



Comment.associate = models => {
    Comment.belongsTo(Comment, {
        foreignKey: {
            allowNull: true
        },
});
}

CommentBoard.hasMany(Comment);

Comment.associate = models => {
    Comment.belongsTo(CommentBoard, {
        foreignKey: {
            allowNull: true
        },
});
}

Comment.hasMany(Comment)



exports.createComment = async (req, res) => {
    const { name, text, commentId, commentBoardId} = req.body;
    let newComment = await Comment.create({
        author: name,
        comment: text,
        CommentId: commentId,
        CommentBoardId: commentBoardId
    });

    return res.send(newComment);
}

exports.getAllComments = async (req, res) => {
    const allComments = await CommentBoard.findAll({ where : {id: 1} ,
        include: [Comment]
    });
    return res.send(allComments[0].Comments)
}

exports.getComment = async (req, res) => {
    console.log(req.params)
    const commentId = req.params.id;
    console.log(commentId);
    const allComments = await Comment.findAll({ where : {id: commentId} ,
        include: [Comment]
    });
    if (allComments[0].Comments.lenght !== 0){
        return res.send(allComments[0].Comments)
    } else{
        return res.send([])
    }
    
}

exports.deleteAllComments = async (req, res) => {
    await Comment.destroy({
        truncate: true
    });
    return res.send()
}












  
