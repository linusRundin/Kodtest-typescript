import {State} from "../../state"
type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    CommentBoardId: Number,
    createdAt: string,
    updatedAt: String;
  };
interface commentAction {
    type: "addCommentInState",
    result: commentType,
    commentId: Number | null,
    id: Number
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

interface saveStateAction {
    type: "saveState",
    state: State
}

interface getStateAction {
    type: "getState",
    state: State
}

export type commentActionType = commentAction;
export type allCommentsActionType = allCommentAction;
export type commentsActionType = commentsAction;
export type saveStateActionType = saveStateAction;
export type getStateActionType = getStateAction;