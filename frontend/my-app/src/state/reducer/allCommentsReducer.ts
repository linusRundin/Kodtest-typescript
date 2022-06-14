
import { allCommentsActionType, commentsActionType } from "../actions/index"
import { createAction, createReducer } from '@reduxjs/toolkit'

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
 const initialState = {
    allComments: emptyList,
    comments: emptyList,
 }
 type Action = allCommentsActionType | commentsActionType;

const listOfComments = createAction<Array<commentType>>('listOfComments')
const comments = createAction<Array<commentType>>('commentsOnPost')

 const improvedReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(listOfComments, (state, action) => {
          console.log("HÄR E JAG")
          
          console.log(action.payload)
        state['allComments'] = action.payload
      })
      .addCase(comments, (state, action) => {
        state['comments'] = action.payload;
      })
      .addDefaultCase((state, action) => state)
  })

const reducer = (state: commentListType = initialState, action: Action ): commentListType => {

    switch (action.type){
        case "listOfComments":
            console.log("är i listofcomments")
            console.log(state['allComments'])
            return { ...state, allComments: action.listOfComments }
        case "commentsOnPost":
            return { ...state, comments: action.comments }
        default:
            return state
    }
}

export default reducer;