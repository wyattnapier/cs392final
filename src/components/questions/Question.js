import React, {Component, useState} from 'react';
import "./question.css";

const buttonStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
};

/*
    This component is the Question component. Based on input
    from the QuestionPage component, it will render a question to be
    displayed within QuestionPage. Each question has an actual question,
    a slider which is a range from 0-10, and a submit button
 */

const Question = ({ question, onNextQuestion }) => {
    const [answer, setAnswer] = useState(0); //create a useState to set answers for each question

    const handleNextQuestion = () => { //function to handle the next question. Sets the initial value to 0
        onNextQuestion(answer);
        setAnswer(0);
    };

    return (
        <div className = "question-wrapper">
            <h2>{question}</h2>
            <input
                type = "range"
                min = "0"
                max = "10"
                step = "1"
                value = {answer}
                className = "slider"
                onChange = {(event) => setAnswer(parseInt(event.target.value))}
                required
                />
            <button onClick={handleNextQuestion} style = {buttonStyle}>Next Question</button>
        </div>
    );
};

export default Question;