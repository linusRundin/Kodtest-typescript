import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import Comment from "./Comment"

type postRespond = {
    id: Number
  };


export default function AlignItemsList(commentData: postRespond) {


    const dispatch = useDispatch();
    const {getComments} = bindActionCreators(actionCreators, dispatch) 
    
    let state = useSelector((state: State) => state.comments.filter(p => p.id === commentData.id)[0])
   
   

    useEffect(() => {
      const interval = setInterval(() => {
        getComments(commentData.id)
      }, 1000);
      return () => clearInterval(interval);
    }, []);      

      return (
        <div >
          { state.comments2 ? state.comments2.map((comment) => 
            <Comment key={comment.id.toString()} id={comment.id} author={comment.author} comment={comment.comment} commentId={comment.CommentId} />
            ): <p>Inga Kommentarer</p>}
        </div>
      );
          }