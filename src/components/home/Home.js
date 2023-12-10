import React, { useState } from "react";
import QuestionPage from "../questions/QuestionPage";
import "./Home.css";
import cat from "../../images/cat.jpg";
import dog from "../../images/dog.jpg";
import {NavLink} from "react-router-dom";

/*
    This component serves as the homepage
    It gives information about what our website is and does
    When the user is ready to start, there is a button which links
    to the question page to begin the first question
 */

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
                    <p className = "about">How does it work?</p>
                    <p className = "about">We have 10 questions that you answer on a scale of 1-10.</p>
                    <p className = "about">Generally, 0 is closer to being a cat characteristic while 10 is more dog-like.</p>
                    <p className = "about">By adding the scores together, we can then determine which characteristics are more favorable to you.</p>
                </div>
                    <div className= "dog-wrapper">
                        <img src = {dog} alt = "dog image"/>
                    </div>
                </div>
        </div>
    );
}

export default HomePage;
