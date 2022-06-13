import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useState } from 'react';
import { Button } from '@mui/material';
import { getComments } from '../state/action-creators';

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
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  `,
);
  
  const CustomButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: ${blue[500]};
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
  
    &:hover {
      background-color: ${blue[600]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${blue[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

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
  const dispatch = useDispatch();
  const {addComment, getAllComments} = bindActionCreators(actionCreators, dispatch) 

  const [name, setName] = useState('')
  const [text, setText] = useState('')

  return (
    <div>
      <NameInput onChange={event => setName(event.target.value)} aria-label="Demo input" placeholder="Namn"></NameInput>
      <CommentInput onChange={event => setText(event.target.value)} aria-label="Demo input" multiline placeholder="Kommentera här!" />
      <Button onClick= {() => {

        addComment(name, text, commentData.cBId, commentData.cId); 
        getComments(commentData.cId);

        } }>Skicka</Button>
    </div>
    
  );
}


