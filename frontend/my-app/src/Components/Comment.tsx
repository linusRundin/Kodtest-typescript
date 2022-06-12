import * as React from 'react';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { List, ListItem, ListItemText } from '@mui/material';
import { useState, useEffect } from 'react';
import ReplyComment from "./ReplyComment"
import Input from "./Input";
import CommentList from "./CommentList"
import ReplyComent from "./ReplyComment"

import { Comment} from 'semantic-ui-react' 

type postRespond = {
    id: Number,
    author: String,
    comment: String,
    commentId: Number
  };

export default function AlignItemsList(commentData: postRespond) {
    
    const [reply, setReply] = useState(false);

    const replyChange = () =>{
        setReply(!reply)
    }


    const dispatch = useDispatch();
    const {getAllComments} = bindActionCreators(actionCreators, dispatch) 
    const state = useSelector((state: State) => state.allComments)
      const styles = {
        border: '1px solid rgba(0, 0, 0,0.5 )', 
        width: "350px",
        backgroundColor: 'lightblue',
        fontWeight: 600,
        alignItems: 'flex-start'
      };

  return (
    <div>
    <div style={styles}>
    <Comment.Group>
    <Comment>
        <Comment.Content>
            <Comment.Metadata>
                <Comment.Author as='a'>{commentData.author}</Comment.Author>
                <Comment.Text>{commentData.comment}</Comment.Text>
            </Comment.Metadata>
            <Comment.Actions onClick={replyChange} >
                <a>Reply</a>
            </Comment.Actions>
        </Comment.Content>
  </Comment>
  </Comment.Group>
  </div>
  {reply &&
    <><ReplyComment id={commentData.id} />
    <Input cId={commentData.id} cBId={commentData.commentId} /></>
    }
</div>
);
}
