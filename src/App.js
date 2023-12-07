import './App.css';
import Header from './components/header/Header.js';
import {Question} from "./components/questions/Question"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Question/>
    </div>
  );
}

export default App;
