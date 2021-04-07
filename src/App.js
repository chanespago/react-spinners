import React, {useState, useEffect} from 'react';
import DotLoader from "react-spinners/DotLoader";
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },8000);
  },[]);

  return (
    <div className="App">
      {
        loading ? 
        <DotLoader color={'#fff'} loading={loading} size={15} />
        :
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      }
      
    </div>
  );
}

export default App;
