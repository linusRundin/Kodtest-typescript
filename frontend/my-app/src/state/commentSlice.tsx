import { createAction, createSlice } from "@reduxjs/toolkit";
import { SliceActions } from "@reduxjs/toolkit/dist/query/core/buildSlice";
import { allCommentsActionType, commentsActionType } from "./actions";
import { useDispatch } from "react-redux";
import {Dispatch} from "redux"



const axios = require("axios");
const API_URL1 = "http://localhost:8080/comment/getAllComments";
const API_URL2 = "http://localhost:8080/comment/getComment";
const API_URL3 = "http://localhost:8080/comment/addComment";
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

type sliceAction = {
    payload: commentType[]
}
const listOfComments = createAction<Array<commentType>>('listOfComments')
const comments22 = createAction<Array<commentType>>('commentsOnPost')
const dispatch2 = useDispatch;

const init = {
    allComments: emptyList,
    comments: emptyList
} as commentListType;

export const todoSlide = createSlice({
  name: "comments",
  initialState,
  reducers: {
    allComments: (state, action) => {
    console.log(action.payload)
      state = {...state, allComments: action.payload};


    },
    comments: (state, action) => {
        state = {...state, comments: action.payload};
    }
  }
});

export const getAllComments = () => async (dispatch: Dispatch) => {
    try {
        // console.log(data);
        const response = await axios.get(API_URL1);
        console.log("VADHÄNDER JAO", response);
        dispatch(allComments(response.data));
      } catch (err) {
        
      }
  };
  
  export const addComment = (author: String, text: String, cBId: Number | null, cId: Number | null) => async (dispatch: Dispatch) => {
    try {
      // console.log(data);
      const response = await axios.post(API_URL3, {name: author, text: text, commentBoardId: cBId, commentId: cId});
      // console.log(response);
     
    } catch (err) {
      
    }
  };

  export const getComments = (id: Number | null) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`${API_URL2}/${id}`);
      dispatch(comments(response.data));
    } catch (err) {
      
    }
  };

export const { allComments, comments } = todoSlide.actions;
export const mystate = (state: commentListType) => state;
export default todoSlide.reducer;