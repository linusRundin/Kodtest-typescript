import './App.css';
import Input from "./Components/Input"
import CommentList from "./Components/CommentList"
import { useDispatch, useSelector } from 'react-redux';
import {actionCreators, State} from "./state"
import Header from "./Components/Header"
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';

function App() {
  const dispatch = useDispatch();
  const {getLastState} = bindActionCreators(actionCreators, dispatch) 
  const state = useSelector((state: State) => state)

  useEffect(() => {
    getLastState()
   
  }, []);
  
  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignContent: 'center'}}>
      <div>
      <Header/>
      <CommentList/>
      <Input cBId={1} cId={null} />
      </div>
         
    </div>
  );
}

export default App;
