import * as React from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import ReplyComment from "./ReplyComment"
import Comment from "./Comment"
import { createAction } from '@reduxjs/toolkit';
import { addComment, getAllComments, getComments, mystate } from "../state/commentSlice";
import { AppDispatch } from '../state';
import { current } from '@reduxjs/toolkit'


export default function AlignItemsList() {

    type commentType = {
        id: Number,
        author: String,
        comment: String,
        CommentId: Number,
        createdAt: string,
        updatedAt: String;
      };
    const dispatch: AppDispatch  = useDispatch();

    const state = useSelector(mystate)
    const {getAllComments} = bindActionCreators(actionCreators, dispatch) 
    let comments: commentType[] = [];
    let [list, setList] = useState<commentType[]>()
    const listOfComments = createAction<Array<commentType>>('listOfComments')


    
    useEffect(() => {
        getAllComments()
    
      }, [])

    
    console.log("IKOMMENTLIST")
    console.log(state)
    

      
    return (
        <div>
            {state['allComments'] ? state['allComments'].map((comment) => 
            <Comment key={comment.id.toString()} id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentera</p>}
        </div>
    );

      
}   

