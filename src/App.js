
import './App.css';
import React from 'react';
import DogPersonPage from './components/home/DogPersonPage.js';
import CatPersonPage from './components/home/CatPerson.js'
import Header from './components/header/Header.js';
import QuestionPage from "./components/questions/QuestionPage"
import HomePage from "./components/home/Home";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}


export default App;