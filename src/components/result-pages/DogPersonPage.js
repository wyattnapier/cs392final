import React from 'react';
import ReactDOM from 'react-dom/client';

const DogPersonPage = () => {
    return (
        <div>
            <header style={{ backgroundColor: '#333', color: 'white', padding: '1em', fontSize: '1.5em' }}>
                <h1>You Are a Dog Person</h1>
            </header>

            <main style={{ padding: '2em' }}>
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
            </main>

            <footer style={{ backgroundColor: '#333', color: 'white', padding: '1em', position: 'fixed', bottom: '0', width: '100%' }}>
                <p>© 2023 You Are a Dog Person</p>
            </footer>
        </div>
    );
};

export default DogPersonPage;