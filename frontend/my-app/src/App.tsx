import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from "./Components/Comment"
import Input from "./Components/Input"
import CommentList from "./Components/CommentList"
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';


function App() {
    
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div className='comments'>
        <CommentList/>
        <Input/>
      </div>
    </div>
  );
}

export default App;
