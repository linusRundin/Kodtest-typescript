import {commentsActionType}  from "../actions/index"

type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    createdAt: string,
    updatedAt: String;
  };
type commentListType = {
    allComments: commentType[],
    comments: commentType[],
  };

const emptyList: commentType[] = []

const initalState = {
    allComments: emptyList,
    comments: emptyList,
 }


const reducer = (state: commentListType  = initalState, action: commentsActionType ) => {

    switch (action.type){
        case "commentsOnPost":
            return state['comments'] = action.comments;
        default:
            return state['comments'] = emptyList
    }
}

export default reducer;