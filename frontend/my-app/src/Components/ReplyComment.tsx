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

    type commentType = {
        id: Number,
        author: String,
        comment: String,
        CommentId: Number,
        createdAt: string,
        updatedAt: String;
      };
    const dispatch = useDispatch();
    const {getComments} = bindActionCreators(actionCreators, dispatch) 
    
    let state = useSelector((state: State) => state.comments.filter(p => p.id === commentData.id)[0])
    type commentObjectType = {
      id: number,
      comments2: commentType[]
    }
   
    const tempObj: commentObjectType = {id: 0, comments2: []}
    let list: commentType[] = []
    /*
    let  show = state.comments.filter(p => p.id === commentData.id)[0]
    if (show === undefined) show = tempObj
    */

    const styles = {
        marginLeft: "50px",
        width: "80%" 
    };


   
    useEffect(() => {
      const interval = setInterval(() => {
        getComments(commentData.id)
      }, 1000);
      return () => clearInterval(interval);
    }, []);

      console.log("REPLY")
      console.log(state)
      console.log(list)
      
      

      return (
        <div >
          { state.comments2 ? state.comments2.map((comment) => 
            <Comment key={comment.id.toString()} id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentarer</p>}
        </div>
      );
          }