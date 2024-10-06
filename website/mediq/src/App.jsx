import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './homepage.jsx';
import Login from './login.jsx';

// Create a separate component for the main page content
const MainPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="main-page">
      <div className="logo">
        <h2>MediQ Logo</h2>
      </div>
      <h1>Welcome to MediQ</h1>
      <h2>Are you a</h2>
      <div className="button-container">
        <button onClick={() => navigate('/homepage')}>User/Patient</button>
        <button onClick={() => navigate('/login')}>Hospital</button>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;