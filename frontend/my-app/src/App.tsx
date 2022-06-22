import './App.css';
import Input from "./Components/Input"
import CommentList from "./Components/CommentList"
import { useDispatch } from 'react-redux';
import {actionCreators} from "./state"
import Header from "./Components/Header"
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';

function App() {
  const dispatch = useDispatch();
  const {getLastState} = bindActionCreators(actionCreators, dispatch) 
  useEffect(() => {
    getLastState()
    
  },[]);


  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignContent: ''}}>
      <div>
      <Header/>
      <CommentList/>
      <Input cBId={1} cId={null} />
      </div>
         
    </div>
  );
}

export default App;
