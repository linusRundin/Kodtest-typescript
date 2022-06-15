/**
 * This file contains the main list of Comments.
 */

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import {  useEffect } from 'react';

import Comment from "./Comment"

import {mystate } from "../state/commentSlice";
import { AppDispatch } from '../state';



export default function AlignItemsList() {
    const dispatch: AppDispatch  = useDispatch();

    const state = useSelector(mystate)
    const {getAllComments} = bindActionCreators(actionCreators, dispatch) 
    
    useEffect(() => {
        getAllComments()
    
      }, [])

    return (
        <div>
            {state['allComments'] ? state['allComments'].map((comment) => 
            <Comment key={comment.id.toString()} id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentera</p>}
        </div>
    );

      
}   

