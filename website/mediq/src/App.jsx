import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HospitalRegister from './hospitalregister.jsx';
import PatientRegister from './patientregister.jsx';

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
        <button onClick={() => navigate('/hospitalregister')}>Hospital</button>
        <button onClick={() => navigate('/patientregister')}>User/Patient</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/patientregister" element={<PatientRegister />} />
        <Route path="/hospitalregister" element={<HospitalRegister />} />
      </Routes>
    </Router>
  );
};

export default App;