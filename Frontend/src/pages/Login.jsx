import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css'; // Import CSS file

const LoginForm = () => {
  // State variables to store email, password, and login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  const [loading, setLoading] = useState(false); // State variable to track loading state

  // Get navigate function from useNavigate hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // API endpoint for login
    const loginUrl = 'https://freecodecamp-gamma.vercel.app/userRoute/login';

    // Data to be sent in the request body
    const loginData = {
      email: email,
      password: password
    };

    try {
      // Making a POST request to the login endpoint
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      // Parsing the JSON response
      const responseData = await response.json();

      // Check if login was successful
      if (response.ok) {
        console.log('Login successful');
        console.log('Response:', responseData);
        setLoginStatus('success');
        // Handle successful login (e.g., redirect to dashboard)
        handleSuccessLogin(responseData); // Pass responseData to handleSuccessLogin
      } else {
        console.log('Login failed');
        console.log('Error:', responseData.error);
        setLoginStatus('failure');
        // Handle failed login (e.g., display error message)
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('failure');
      // Handle network errors or other exceptions
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  // Function to handle Google login
  const handleGoogleLogin = () => {
    // Your Google login logic here
    console.log('Initiating Google login...');
    // For demonstration purposes, just log a message
  };

  // Function to clear email and password fields
  const clearFields = () => {
    setEmail('');
    setPassword('');
  };

  // Function to handle successful login
  const handleSuccessLogin = (responseData) => {
    clearFields();
    setTimeout(() => {
      navigate('/'); // Redirect to home page after 3 seconds
      window.location.reload(); // Refresh the page
    }, 10);

    // Store token in session storage
    localStorage.setItem('token', responseData.token);
  };

  // Function to handle signup redirection
  const handleSignup = () => {
    // Handle signup redirection logic here
    navigate('/signup'); // Redirect to signup page
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading}> {/* Disable button while loading */}
            {loading ? 'login...' : 'Login'} {/* Show loader or Login text based on loading state */}
          </button>
        </form>
        {loginStatus === 'success' && <div className="success-message">Login successful!</div>}
        {loginStatus === 'failure' && <div className="error-message">Login failed. Please check your credentials.</div>}
        <button className="google-login-btn" onClick={handleGoogleLogin}>Login with Google</button>
        <button className="signup-btn" onClick={handleSignup}>Signup</button> {/* Signup button */}
      </div>
    </div>
  );
}

export default LoginForm;
