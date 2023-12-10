import React, { useState } from "react";
import QuestionPage from "../questions/QuestionPage";
import "./Home.css";
import cat from "../../images/cat.jpg";
import dog from "../../images/dog.jpg";
import {NavLink} from "react-router-dom";

function HomePage() {

    const buttonStyle = {
        backgroundColor: "#333",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
    };

    //const [showQuiz, setShowQuiz] = useState(false);

    //const startQuiz = () => {
      //  setShowQuiz(true);
    //};

    return (
        <div className="homepage">

                <div className = "homepage-wrapper">
                <div className= "cat-wrapper">
                    <img src = {cat} alt = "cat image"/>
                </div>
                <div className = "text-wrapper">
                    <p>Welcome to our quiz website where you find out whether you are a cat or dog person</p>
                    <NavLink to = "/QuestionPage">
                    <button style={buttonStyle}>Start The Quiz</button>
                    </NavLink>
                    <p></p>
                </div>
                    <div className= "dog-wrapper">
                        <img src = {dog} alt = "dog image"/>
                    </div>
                </div>
        </div>
    );
}

export default HomePage;
