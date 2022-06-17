import React from 'react';
import Board from './components/Board/Board';
import './accept/scss/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
       <Board />
       <ToastContainer />
    </div>
  );
}

export default App;
