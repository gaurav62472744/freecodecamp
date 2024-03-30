import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Signup.css'; // Import CSS file

const Signup = () => {
  // State variables to store name, email, password, and signup status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupStatus, setSignupStatus] = useState(null);
  const [loading, setLoading] = useState(false); // State variable to track loading state

  // Get navigate function from useNavigate hook
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    // Mock API endpoint for signup (replace with your actual endpoint)
    const signupUrl = 'https://freecodecamp-gamma.vercel.app/userRoute/register';

    // Data to be sent in the request body
    const signupData = {
      name: name,
      email: email,
      password: password
    };

    try {
      // Making a POST request to the signup endpoint
      const response = await fetch(signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      });

      // Parsing the JSON response
      const responseData = await response.json();

      // Check if signup was successful
      if (response.ok) {
        console.log('Signup successful');
        console.log('Response:', responseData);
        setSignupStatus('success');
        // Handle successful signup (e.g., redirect to login page)
        navigate('/login'); // Redirect to login page
      } else {
        console.log('Signup failed');
        console.log('Error:', responseData.error);
        setSignupStatus('failure');
        // Handle failed signup (e.g., display error message)
      }
    } catch (error) {
      console.error('Error:', error);
      setSignupStatus('failure');
      // Handle network errors or other exceptions
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  // Function to handle Google signup
  const handleGoogleSignup = () => {
    // Your Google signup logic here
    console.log('Initiating Google signup...');
    // For demonstration purposes, just log a message
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading}> {/* Disable button while loading */}
            {loading ? 'Signing up...' : 'Signup'} {/* Show loader or Signup text based on loading state */}
          </button>
        </form>
        {signupStatus === 'success' && <div className="success-message">Signup successful!</div>}
        {signupStatus === 'failure' && <div className="error-message">Signup failed. Please try again.</div>}
        <button className="google-signup-btn" onClick={handleGoogleSignup}>Signup with Google</button>
        <Link to="/login" className="redirect-to-login">Already have an account? Login here</Link>
      </div>
    </div>
  );
}

export default Signup;
