/**
 * This file is the list that contains comments that are connected
 * to other comments.
 * What differs this component from CommentList is that this component
 * runs different functions and is placed with a margin to indicate that
 * it is not the original list of comments 
 */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, AppDispatch, State } from '../state';
import Comment from "./Comment"

type postRespond = {
    id: Number
  };


export default function AlignItemsList(commentData: postRespond) {
  const dispatch: AppDispatch  = useDispatch();

  const {getComments} = bindActionCreators(actionCreators, dispatch) 
  useEffect(() => {
    getComments(commentData.id)
  
  },[]);
    
    
    let state = useSelector((state: State) => state.comments.filter(p => p.id === commentData.id)[0])
   
      return (
        <div >
          { state.myComments ? state.myComments.map((comment) => 
            <Comment key={comment.id.toString()} id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId}  />
            ): <p>Inga Kommentarer</p>}
        </div>
      );
          }