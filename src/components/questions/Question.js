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
const Question = ({ question, onNextQuestion }) => {
    const [answer, setAnswer] = useState(0);

    const handleNextQuestion = () => {
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