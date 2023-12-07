import React, {useState} from "react";
import "./Question-Component";
import Questions from "./Question-Component";
import DogPersonPage from "../home/DogPerson";
import CatPersonPage from "../home/CatPerson";



export function Question(){
    const questions = [
        "On a scale of 0-10, how much do you value independence in a pet?",
        "On a scale of 0-10, how much time are you willing to spend playing with your pet each day?",
        "On a scale of 0-10, how much care would you like to take of your pet's grooming?",
        "On a scale of 0-10, how important is loyalty in a pet to you?",
        "On a scale of 0-10, how loud would you like your pet to be?",
        "On a scale of 0-10, how playful and active would you like your pet to be?",
        "On a scale of 0-10, how large of a pet would you like to have?",
        "On a scale of 0-10, how important is it that your pet is social and gets along with other animals?",
        "On a scale of 0-10, how important is it that your pet is easy to train?",
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswer] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const handleNextQuestion = (answer) => {
        setAnswer([...answers, answer]);

    if (currentQuestionIndex < questions.length - 1){
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    else{
        let tScore = 0;
        for(let i = 0; i < questions.length; i++){
            tScore += answers[i];
        }
        setTotalScore(tScore);
        console.log("all questions answered");
    }

    return (
        <div className = "question-div">
            {currentQuestionIndex < questions.length ? (
                // Render the current question
                <Questions
                    question={questions[currentQuestionIndex]}
                    onNextQuestion={handleNextQuestion}
                />
            ) : (
                // Render the results page
                totalScore >= 50 ? <DogPersonPage/> : <CatPersonPage/>
            )}
        </div>
    );
};

}