
import './App.css';
import React from 'react';
import DogPersonPage from './components/result-pages/DogPersonPage.js';
import CatPersonPage from './components/result-pages/CatPerson.js'
import Header from './components/header/Header.js';
import QuestionPage from "./components/questions/QuestionPage"
import HomePage from "./components/home/Home";
import Footer from "./components/footer/Footer";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Home from "./components/home/Home";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*
  App.js is used tor render the final page. It also includes a router for some
  useful routes used elsewhere in the program
 */
function App() {
  return (
      <div className = "app-wrapper">
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/QuestionPage" element = {<QuestionPage/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
      </div>
  );
}


export default App;