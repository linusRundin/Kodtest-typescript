import './App.css';
import Input from "./Components/Input"
import CommentList from "./Components/CommentList"
import { useSelector } from 'react-redux';
import {State} from "./state"
import Header from "./Components/Header"

function App() {

  const state = useSelector((state: State) => state)

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
