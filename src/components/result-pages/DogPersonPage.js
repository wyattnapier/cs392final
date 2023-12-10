import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Results.css";
import dogs from "../../images/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg";

const DogPersonPage = () => {
    return (
        <div className = "page-wrapper">

            <div className = "wrapper">
                <h1>You Are a Dog Person</h1>
                <p>Embrace your love for dogs!</p>
                <p>Because you are a dog person, here are some reasons why dogs make amazing companions:</p>
                <ul>
                    <li>Unconditional love and loyalty</li>
                    <li>Constant source of joy and laughter</li>
                    <li>Encourages an active lifestyle</li>
                    <li>Provides companionship and emotional support</li>
                    <li>Teaches responsibility and empathy</li>
                </ul>
                <p>If you don't have a dog already, you should look into getting one!</p>
                <div className = "image-container">
                    <img src = {dogs} alt = "three dogs sitting"/>
                </div>
            </div>

        </div>
    );
};

export default DogPersonPage;