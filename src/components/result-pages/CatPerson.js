import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Results.css";
import cats from "../../images/Hero Pedigree Cats.jpg";
import dogs from "../../images/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg";


/*
    CatPersonPage will be displayed if the total score is less than 50
    It gives some information on cats
 */
const CatPersonPage = () => {
    return (
        <div className = "page-wrapper">

            <div className = "wrapper">
                <h1>You Are a Cat Person</h1>
                <p>Embrace your love for cats!</p>
                <p>Because you are a cat person, here are some reasons why cats make wonderful companions:</p>
                <ul>
                    <li>Affectionate companionship</li>
                    <li>Low maintenance</li>
                    <li>Entertaining personalities</li>
                    <li>Rodent control</li>
                    <li>Stress relief</li>
                    <li>Independence</li>
                </ul>
                <p>If you don't have a cat already, you should find one on the street to adopt!</p>
                <div className = "image-container">
                    <img src = {cats} alt = "a bunch of cats"/>
                </div>
            </div>
        </div>
    );
};

export default CatPersonPage;