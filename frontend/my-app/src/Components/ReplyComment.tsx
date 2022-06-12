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
    const state = useSelector((state: State) => state.comments)
    const styles = {
        marginLeft: "50px",
        width: "80%" 
    };

    
    
    
    useEffect( () => {
    console.log("USEEFFECT")
    getComments(commentData.id)
    
      }, []);

      console.log("REPLY")
      console.log(state)

      return (
        <div style={styles}>
          {state ? state.map((comment) => 
            <Comment id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentarer</p>}
        </div>
      );
}