type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    createdAt: string,
    updatedAt: String;
  };
interface commentAction {
    type: "addCommentInState",
    webCode: Number
}

interface allCommentAction {
    type: "listOfComments",
    listOfComments: Array<commentType>
}

interface commentsAction {
    type: "commentsOnPost",
    comments: Array<commentType>,
    id: Number
}

export type commentActionType = commentAction;
export type allCommentsActionType = allCommentAction;
export type commentsActionType = commentsAction;