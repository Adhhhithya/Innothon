import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './homepage.jsx';
import Patientlogin from './patientlogin.jsx';

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
        <button onClick={() => navigate('/patientlogin')}>User/Patient</button>
        <button onClick={() => navigate('/homepage')}>Hospital</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/patientlogin" element={<Patientlogin />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;