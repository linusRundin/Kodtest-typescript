type postRespond = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    createdAt: string,
    updatedAt: String;
  };
interface commentAction {
    type: "comment",
    webCode: String
}

interface allCommentAction {
    type: "listOfComments",
    listOfComments: Array<postRespond>
}

interface commentsAction {
    type: "commentsOnPost",
    comments: Array<postRespond>
}



export type commentActionType = commentAction;
export type allCommentsActionType = allCommentAction;
export type commentsActionType = commentsAction;