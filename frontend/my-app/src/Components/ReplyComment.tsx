import * as React from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import ReplyComment from "./ReplyComment"
import Comment from "./Comment"
import { getComments } from '../state/action-creators';

type postRespond = {
    id: Number
  };


export default function AlignItemsList(commentData: postRespond) {


    const dispatch = useDispatch();
    const {getComments} = bindActionCreators(actionCreators, dispatch) 
    const state = useSelector((state: State) => state.getComments)
    const styles = {
        marginLeft: "50px",
        width: "80%" 
    };

    type commentType = {
        id: Number,
        author: String,
        comment: String,
        CommentId: Number,
        createdAt: string,
        updatedAt: String;
      };
      
    let example: Array<commentType> =[{
        id: 1,
        author: "",
        comment: "",
        CommentId: 1,
        createdAt: "",
        updatedAt: "",
    }]
    
    const [comments, setItems] = useState(example) 
    
    useEffect( () => {
    getComments(commentData.id)
    setItems(state)
    
      }, []);

      console.log(state)
      return (
        <div style={styles}>
          {comments.map((comment) => 
            <Comment id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            )}
        </div>
      );
}