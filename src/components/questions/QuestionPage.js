import React, {useEffect, useState} from "react";
import "./Question";
import Question from "./Question";
import DogPersonPage from "../result-pages/DogPersonPage";
import CatPersonPage from "../result-pages/CatPerson";
import "./question.css"
import questionImage from "../../images/attachment-Untitled-design-2023-10-10T095546.407.jpg";

/*
    QuestionPage component serves as the shell for which to display questions.
    It contains a string array of questions to be answered as well as logic for
    generating the next question and storing the answers. For each question answered, it will
    store the value in an integer array which is then summed up to determine the ultimate
    result
    At the end, if the result is less than 50 (more aligned with cat behavior), the cat page will be
    displayed. The same holds if it is 50 or more to display the dog page
 */

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

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); //useState to hold the index so we know what question to display
    const [answers, setAnswers] = useState(Array(questions.length).fill(0)); //useState for an array of answers which is initialized as all 0

    /*
        The handleNextQuestion function takes, as input, the answer to the current question
        it then will callback to the previous state and append the new value to the index of the question
        finally, the function updates the index state to be the next question
     */
    const handleNextQuestion = (answer) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = parseInt(answer, 10);
            return newAnswers;
        });

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const totalScore = answers.reduce((acc, val) => acc + val, 0);  //calculation for total score, use reduction to sum up the list
    console.log("total: ", totalScore);

    return (
        <div className = "question-div">
            {currentQuestionIndex < questions.length ? (
                // Render the current question
                <div className = "wrapper">
                <Question
                    question={questions[currentQuestionIndex]}
                    onNextQuestion={handleNextQuestion}
                />
                <div className = "image-container">
                    <img src = {questionImage} alt = "dog and cat with question mark"/>
                </div>
                </div>
            ) : (
                // Render the results page
                totalScore >= 50 ? (<DogPersonPage/>) : (<CatPersonPage/>)
            )}
        </div>
    );

}
export default QuestionPage;