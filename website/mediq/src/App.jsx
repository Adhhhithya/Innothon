import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HospitalRegister from './hospitalregister.jsx';
import PatientRegister from './patientregister.jsx';
import PatientHomePage from './patienthomepage.jsx';
import MainLogo from './assets/Mediq-logo.png';
import HospitalHomePage from './hospitalhomepage.jsx';

const MainPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="main-page">
      <div className="logo">
        <img src={MainLogo} alt="" />
      </div>
      <h1>Welcome to Mediq</h1>
      <h2>Are you a</h2>
      <div className="button-container">
        <button onClick={() => navigate('/login')}>User</button>
        <button onClick={() => navigate('/Hlogin')}>Hospital</button>
      </div>
    </div>
  );
};

const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    
  };

  return (
    <div className="user-login">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" onClick={()=>navigate('/patienthomepage')}>Login</button>
          <button type="button" onClick={() => navigate('/patientregister')}>Register</button>
        </div>
      </form>
    </div>
  );
};

const HospitalLogin = () => {
  const navigate = useNavigate();
  const [HloginData, setHLoginData] = React.useState({
    username: '',
    password: '',
  });

  const handlehospitalChange = (e) => {
    const { name, value } = e.target;
    setHLoginData({
      ...HloginData,
      [name]: value,
    });
  };

  const handlehospitalSubmit = (e) => {
    e.preventDefault();
    console.log(HloginData);
    
  };

  return (
    <div className="hospital-login">
      <h2>Hospital Login</h2>
      <form onSubmit={handlehospitalSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={HloginData.username}
            onChange={handlehospitalChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={HloginData.password}
            onChange={handlehospitalChange}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" onClick={()=>navigate('/hospitalhomepage')}>Login</button>
          <button type="button" onClick={() => navigate('/hospitalregister')}>Register</button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/Hlogin" element={<HospitalLogin />} />
        <Route path="/patienthomepage" element={<PatientHomePage />} />
        <Route path="/hospitalhomepage" element={<HospitalHomePage />} />
        <Route path="/hospitalregister" element={<HospitalRegister />} />
        <Route path="/patientregister" element={<PatientRegister />} />
      </Routes>
    </Router>
  );
};

export default App;