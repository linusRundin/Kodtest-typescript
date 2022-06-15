/**
 * This file contains the reducer logic of the redux implementation
 */

import { allCommentsActionType, commentsActionType, commentActionType  } from "../actions/index"
import produce from 'immer'

type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    createdAt: string,
    updatedAt: String;
  };

 const emptyList: commentType[] = []
 

 type commentObjectType = {
   id: Number,
   comments2: commentType[]
 }

 const commentList: commentObjectType[] = []

 const initialState = {
    allComments: emptyList,
    comments: commentList,
 }

 type state = {
   allComments: commentType[],
   comments: commentObjectType[]
 }

 type Action = allCommentsActionType | commentsActionType | commentActionType;


const reducer2 = (state: state = initialState, action: Action ): state =>
  produce(state, draft => {
    switch (action.type) {

      case "addCommentInState": {
        if (draft.comments.find((todo) => todo.id === action.webCode) === undefined){
          
          const temp: commentObjectType = {
            id: action.webCode,
            comments2: []
          }
         
          draft.comments.push(temp)
          
        } else {
        }
        break;
      }
      case "listOfComments":

        draft.allComments = action.listOfComments
      break;

      case "commentsOnPost": {        
        if (state.comments.find((todo) => todo.id === action.id) === undefined){
          
          const temp: commentObjectType = {
            id: action.id,
            comments2: action.comments
          }
    
          draft.comments.push(temp)
          
        } else {
        
          const temp = draft.comments.filter(p => p.id === action.id)[0];
              if (temp) temp.comments2 = action.comments;
        }
      break;
    }
    default:
      break;
    }
  });

export default reducer2;