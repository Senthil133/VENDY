// src/components/Login.js
import React from 'react';
import './Login.css';

function Login() {
    console.log('Login component is rendered'); 
    return (
        <div className="login-container">
            <div className="illustration">
                {/* Replace this with an actual image */}
                <img src={require('../Components/assets/images/Picture1.png')} alt="Illustration" className="login-illustration" />
            </div>
            <div className="divider"></div>
            <div className="login-form">
                <h1>Welcome, Login</h1>
                <form>
                    <div className="input-group">
                        <label>Email Address/Username</label>
                        <input type="text" placeholder="Sthirumalaiswam5776@conestogac.on.ca" />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <div className="password-input">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="options">
                        <a href="#">Forget Password?</a>
                    </div>
                    <button type="submit" className="login-button">Login Now</button>
                    <div className="help">
                        <a href="#">Help Login?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
