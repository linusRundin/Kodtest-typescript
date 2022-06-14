
import { allCommentsActionType, commentsActionType, commentActionType  } from "../actions/index"
import { createAction, createReducer, current } from '@reduxjs/toolkit'
import { indigo } from "@mui/material/colors";
import produce from 'immer'

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
    comments: {},
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

/*
const reducer = (state: state = initialState, action: Action ): state => {

    switch (action.type){
        case "listOfComments":
            console.log("är i listofcomments")
            console.log(state['allComments'])
            return { ...state, allComments: action.listOfComments }
        case "commentsOnPost":
        console.log("I UPDATERA REplY")
        console.log("ATT ÄNDRA",state.comments.find((todo) => todo.id === action.id));
        
        console.log("ID I FRÅGA", action.id)
        
        if (state.comments.find((todo) => todo.id === action.id) === undefined){
          
          const temp: commentObjectType = {
            id: action.id,
            comments2: action.comments
          }
          console.log("NY")
          return {...state, comments: [...state.comments, temp]}
          
        } else {
          console.log("Här")
          console.log(action.id)
          const nextState = produce(state, (draftState) => {
            // "mutate" the draft array
            let temp = draftState.comments.find((todo) => todo.id === action.id)

            if (temp !== undefined){
    
              temp.comments2 = action.comments
            }
            const package = draftState.comments.filter(p => p.id === action.id)[0];¨
          if(package) 
          // "mutate" the nested state
           
        
          
         
          console.log("NEXT STATE", nextState)
          return nextState

        }
          
        default:
            return state
    }
}

*/

const reducer2 = (state: state = initialState, action: Action ): state =>
  produce(state, draft => {
    switch (action.type) {
      
      case "addCommentInState": {
        if (draft.comments.find((todo) => todo.id === action.webCode) === undefined){
          
          const temp: commentObjectType = {
            id: action.webCode,
            comments2: []
          }
          console.log("NY")
          console.log(draft.comments)
          draft.comments.push(temp)
          
        } else {
        }
        break;
      }
      case "listOfComments":
        console.log("är i listofcomments")
        console.log(state['allComments'])
        draft.allComments = action.listOfComments
      break;

      case "commentsOnPost": {
        console.log("I UPDATERA REplY")
        console.log("ATT ÄNDRA",state.comments.find((todo) => todo.id === action.id));
        
        console.log("ID I FRÅGA", action.id)
        
        if (state.comments.find((todo) => todo.id === action.id) === undefined){
          
          const temp: commentObjectType = {
            id: action.id,
            comments2: action.comments
          }
          console.log("NY")
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