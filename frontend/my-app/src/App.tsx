import './App.css';
import Input from "./Components/Input"
import CommentList from "./Components/CommentList"

function App() {

  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div className='comments'>
        <CommentList/>
        <Input cBId={1} cId={null} />
      </div>
    </div>
  );
}

export default App;
