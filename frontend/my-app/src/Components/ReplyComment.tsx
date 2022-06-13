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
    const state = useSelector((state: State) => state)
    const styles = {
        marginLeft: "50px",
        width: "80%" 
    };

    
    const [list , setList] = useState<commentType[]>()
    
    useEffect( () => {
    console.log("USEEFFECT")

    getComments(commentData.id)
    setList(state['comments'])

      }, [state]);

      console.log("REPLY")
      console.log(state)

      return (
        <div >
          {state['comments'] ? state['comments'].map((comment) => 
            <Comment id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentarer</p>}
        </div>
      );
}