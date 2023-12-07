import React from 'react';
import ReactDOM from 'react-dom/client';

const CatPersonPage = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#333', color: 'white', padding: '1em', fontSize: '1.5em' }}>
                <h1>You Are a Cat Person</h1>
            </header>

            <main style={{ padding: '2em' }}>
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
            </main>

            <footer style={{ backgroundColor: '#333', color: 'white', padding: '1em', position: 'fixed', bottom: '0', width: '100%' }}>
                <p>© 2023 You Are a Cat Person</p>
            </footer>
        </div>
    );
};

export default DogPersonPage;