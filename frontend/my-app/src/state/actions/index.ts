type commentType = {
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
    listOfComments: Array<commentType>
}

interface commentsAction {
    type: "commentsOnPost",
    comments: Array<commentType>
}



export type commentActionType = commentAction;
export type allCommentsActionType = allCommentAction;
export type commentsActionType = commentsAction;