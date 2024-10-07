import React, { useState } from 'react';
import './patientRegister.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './patienthomepage';

export default function PatientRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    username: '',
    password: '',
    locationAccess: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration complete!');
  };

  return (
    <div className="P-login">
      <div className="signup-form">
        <div className="logo">LOGO</div>
        <form onSubmit={handleSubmit}>
          <h2>Patient Sign-Up</h2>
          
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>
          
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </label>
          
          <label>
            Mobile No:
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </label>
          
          <label>
            Email ID:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>
          
          <label>
            Gender:
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
          </label>
          
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
          
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="locationAccess" checked={formData.locationAccess} onChange={handleChange} />
              Location Access
            </label>
            <span className="terms-label">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
              Terms & Conditions
            </span>
          </div>
          <button onClick={() => navigate('/patienthomepage')} type="submit" className="submit-btn">Complete Registration</button>
        </form>
      </div>
    </div>
  );
}
