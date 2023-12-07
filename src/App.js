
import './App.css';
import React from 'react';
import DogPersonPage from './components/home/dogperson';
import Header from './components/header/Header.js';
import {Question} from "./components/questions/Question"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Question/>
    <DogPersonPage />
    </div>
  );
}


export default App;