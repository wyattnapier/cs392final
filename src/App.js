
import './App.css';
import React from 'react';
import DogPersonPage from './components/result-pages/DogPersonPage.js';
import CatPersonPage from './components/result-pages/CatPerson.js'
import Header from './components/header/Header.js';
import QuestionPage from "./components/questions/QuestionPage"
import HomePage from "./components/home/Home";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header/>
      <HomePage/>
    </div>
  );
}


export default App;