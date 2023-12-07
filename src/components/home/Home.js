import React, { useState } from "react";
import QuestionPage from "../questions/QuestionPage";

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

    const [showQuiz, setShowQuiz] = useState(false);

    const startQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="homepage">
            {!showQuiz ? (
                <div>
                    <header style={{ backgroundColor: '#333', color: 'white', padding: '1em', fontSize: '1.5em' }}>
                        <h1>Do You Prefer Cats or Dogs?</h1>
                    </header>
                    <main style={{ padding: '10px', fontSize: '20px', }}>
                    <p>Welcome to our quiz website where you find out whether you are a cat or dog person</p>

                    <button style={buttonStyle} onClick={startQuiz}>Start The Quiz</button>
                    </main>

                </div>
            ) : (
                <QuestionPage />
            )}
            <footer style={{ backgroundColor: '#333', color: 'white', padding: '1em', position: 'fixed', bottom: '0', width: '100%' }}>
                <p>© 2023 All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default HomePage;
