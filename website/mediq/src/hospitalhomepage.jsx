import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import './Hospitalhomepage.css';
import logoImage from './assets/Mediq-logo.png';

const HospitalHomePage = () => {
  const navigate = useNavigate();  // Use the useNavigate hook

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <div className="dashboard">
      <div className="logo"><img src={logoImage} alt="hospital-logo" className="Hospital Logo" /></div>
      <div className="header">
        <span className="hospital-logo-text">Hospital Logo</span>
        <div className="hospital-cover-photo">Hospital Cover Photo</div>
      </div>
      <h1>Hello Hospital !</h1>
      <div className="menu-items">
        <motion.button
          className="menu-item"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => navigate('/patientbookings')}  // Add navigation on click
        >
          <div className="text">Patient Bookings</div>
        </motion.button>
        <motion.button
          className="menu-item"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="text">Monitor your Resources</div>
        </motion.button>
        <motion.button
          className="menu-item"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="text">Check Staff Duty</div>
        </motion.button>
      </div>
      <div className="footer">MEDIQ</div>
    </div>
  );
};

export default HospitalHomePage;