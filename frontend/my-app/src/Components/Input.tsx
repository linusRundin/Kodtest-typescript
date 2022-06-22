/**
 * This file contains the Input component
 * The input component has two inputs, one for name and one for text,
 * it also contains an send button that uploads the content to the database.
 */

import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, AppDispatch, State } from '../state';
import { useState } from 'react';
import { Button } from '@mui/material';

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  500: '#007FFF',
  400: '#3399FF',
  600: '#0072E5',
  700: '#0059B2',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledTextareaElement = styled('textarea')(
    ({ theme }) => `
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;
    resize: none;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  `,
);
  
const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 8px;
  padding: 12px 12px;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }
`,
);

const CommentInput = React.forwardRef(function CustomInput(
    props: InputUnstyledProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) {
    return (
      <InputUnstyled
        components={{ Input: StyledInputElement, Textarea: StyledTextareaElement }}
        {...props}
        ref={ref}
      />
    );
  });

const NameInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

type postRespond = {
  cBId: Number | null,
  cId: Number | null
};

export default function Input(commentData: postRespond) {
  const dispatch: AppDispatch = useDispatch();
  const {getAllComments, addComment, getComments, saveState} = bindActionCreators(actionCreators, dispatch) 
  let state = useSelector((state: State) => state)

  
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const updateList = async () => {
    if (commentData.cId === null){
       getAllComments()
    }else {
      getComments(commentData.cId)

    }
  };

  const sendComment = async () => {
   addComment(name, text, commentData.cBId, commentData.cId)
  };

  const saveCurentState = async () => {
    saveState(state.allComments, state.comments)
   };



  return (
    <div>
      <NameInput onChange={event => setName(event.target.value)} aria-label="Demo input" placeholder="Namn"></NameInput>
      <CommentInput onChange={event => setText(event.target.value)} aria-label="Demo input" multiline placeholder="Kommentera här!" />
      <Button onClick= {async () => {
        sendComment()
        updateList()
        saveCurentState()
        
        } }>Skicka</Button>
    </div>
    
  );
}


