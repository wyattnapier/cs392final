
import './App.css';
import React from 'react';
import DogPersonPage from './components/home/DogPerson.js';
import CatPersonPage from './components/home/CatPerson.js'
import Header from './components/header/Header.js';
import {Question} from "./components/questions/Question"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Question/>
      <DogPersonPage />
      <CatPersonPage />
    </div>
  );
}


export default App;