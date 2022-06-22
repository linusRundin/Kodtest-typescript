/**
 * This file contains the reducer logic of the redux implementation
 */

import { allCommentsActionType, commentsActionType, commentActionType, saveStateActionType, getStateActionType  } from "../actions/index"
import produce from 'immer'

type commentType = {
    id: Number,
    author: String,
    comment: String,
    CommentId: Number,
    CommentBoardId: Number,
    createdAt: string,
    updatedAt: String;
  };

 const emptyList: commentType[] = []
 

 type commentObjectType = {
   id: Number,
   myComments: commentType[]
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

 type Action = allCommentsActionType | commentsActionType | commentActionType | saveStateActionType | getStateActionType;


const reducer2 = (state: state = initialState, action: Action ): state =>
  produce(state, draft => {
    switch (action.type) {

      case "getState": {
        draft.allComments = action.state.allComments
        draft.comments = action.state.comments
        break;
      }

      case"saveState":{

        break;
      }

      case "addCommentInState": {
        if (draft.comments.find((p) => p.id === action.id) === undefined){
          
          const temp: commentObjectType = {
            id: action.id,
            myComments: []
          }
          draft.comments.push(temp)
          
        }         
        if (action.commentId === null){
            draft.allComments.push(action.result)
        } else {
           
            const temp = draft.comments.filter((p) => p.id === action.result.CommentId)[0];
            if(temp) temp.myComments.push(action.result);

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
            myComments: action.comments
          }
    
          draft.comments.push(temp)
          
        } else {
        
          const temp = draft.comments.filter(p => p.id === action.id)[0];
              if (temp) temp.myComments = action.comments;
        }
      break;
    }
    default:
      break;
    }
  });

export default reducer2;