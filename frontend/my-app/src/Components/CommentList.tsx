import * as React from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import ReplyComment from "./ReplyComment"
import Comment from "./Comment"


export default function AlignItemsList() {

    type commentType = {
        id: Number,
        author: String,
        comment: String,
        CommentId: Number,
        createdAt: string,
        updatedAt: String;
      };
    const dispatch = useDispatch();
    const {getAllComments} = bindActionCreators(actionCreators, dispatch) 
    const state = useSelector((state: State) => state.allComments)
    let comments: commentType[] = [];
    const [list, setList] = useState<commentType[]>()

    useEffect( () => {
    
    setList(state)

      }, [state]);

    
      
    return (
        <div>
            {list ? list.map((comment) => 
            <Comment id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentera</p>}
        </div>
    );

      
      
}

