import React, { useEffect } from 'react';
import Board from './components/Board/Board';
import './accept/scss/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  useEffect(() => {
    fetch("http://localhost:4444/login/").then(data => data)
  }, [])
  
  

  return (
    <div className="App">
       <Board />
       <ToastContainer />
    </div>
  );
}

export default App;
