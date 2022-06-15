import { useState, useEffect } from 'react';
import ReplyComment from "./ReplyComment"
import Input from "./Input";


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
        if(reply){
         
        }
        
      
    }
      const styles = {
        border: '1px solid rgba(0, 0, 0,0.5 )', 
        width: "350px",
        backgroundColor: 'lightblue',
        fontWeight: 600,
        alignItems: 'flex-start'
      };

      const styles2 = {
        marginLeft: "50px",
        width: "80%" 
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
  </div >
  <div style={styles2}>
  {reply &&
    <><ReplyComment id={commentData.id} />
    <Input cId={commentData.id} cBId={commentData.commentId} /></>
    }
</div>
</div>
);
}
