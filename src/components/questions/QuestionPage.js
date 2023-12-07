import React, {useEffect, useState} from "react";
import "./Question";
import Question from "./Question";
import DogPersonPage from "../result-pages/DogPersonPage";
import CatPersonPage from "../result-pages/CatPerson";



function QuestionPage(){
    const questions = [
        "1. On a scale of 0-10, how dependent do you want your pet to be?",
        "2. On a scale of 0-10, how much time are you willing to spend playing with your pet each day?",
        "3. On a scale of 0-10, how much care would you like to take of your pet's grooming?",
        "4. On a scale of 0-10, how important is loyalty in a pet to you?",
        "5. On a scale of 0-10, how loud would you like your pet to be?",
        "6. On a scale of 0-10, how playful and active would you like your pet to be?",
        "7. On a scale of 0-10, how large of a pet would you like to have?",
        "8. On a scale of 0-10, how important is it that your pet is social and gets along with other animals?",
        "9. On a scale of 0-10, how important is it that your pet is easy to train?",
        "10. On a scale of 0-10, how bad are your allergies?",
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(0));

    const handleNextQuestion = (answer) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = parseInt(answer, 10);
            return newAnswers;
        });

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const totalScore = answers.reduce((acc, val) => acc + val, 0);
    console.log("total: ", totalScore);

    return (
        <div className = "question-div">
            {currentQuestionIndex < questions.length ? (
                // Render the current question
                <Question
                    question={questions[currentQuestionIndex]}
                    onNextQuestion={handleNextQuestion}
                />
            ) : (
                // Render the results page
                totalScore >= 50 ? (<DogPersonPage/>) : (<CatPersonPage/>)
            )}
        </div>
    );

}
export default QuestionPage;