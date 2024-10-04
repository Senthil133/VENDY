// src/Components/Home.js
import React, { useEffect, useState } from 'react';
import logo from './assets/images/logo.png'; // Ensure this path is correct
import './Home.css'; // Import your CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Home() {
    const [countdown, setCountdown] = useState(5); // Set initial countdown value to 5
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        // Decrease the countdown every second
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    navigate('/login'); // Navigate to login page
                }
                return prev - 1; // Decrement countdown
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, [navigate]);

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <h1 className="home-title">Welcome to Vendy</h1>
                <div className="countdown">
                    Redirecting in {countdown} second{countdown !== 1 ? 's' : ''}...
                </div>
            </div>
        </div>
    );
}

export default Home;
