
import { allCommentsActionType, commentsActionType } from "../actions/index"

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
  
 const initalState = {
    allComments: [],
    comments: [],
 }
 const emptyList: commentType[] = []

 type Action = allCommentsActionType | commentsActionType;

const reducer = (state: commentListType = initalState, action: Action ): commentListType => {

    switch (action.type){
        case "listOfComments":
            console.log("är i listofcomments")
            console.log(state['allComments'])
            state['allComments'] = action.listOfComments;
            return state;
        case "commentsOnPost":
            state['comments'] = action.comments;
            return state
        default:
            return state
    }
}

export default reducer;