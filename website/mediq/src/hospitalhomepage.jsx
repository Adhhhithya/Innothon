import React from 'react';
import { motion } from 'framer-motion';
import './Hospitalhomepage.css';
import logoImage from './assets/Mediq-logo.png';

const HospitalHomePage = () => {
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
      <div className="header">
        <div className="logo"><img src={logoImage} alt="Hospital Logo" className="logo-image" /></div>
        <div className="hospital-photo">Hospital Cover Photo
          <div className="hospital-logo">Hospital Logo</div>
        </div>
      </div>
      <h1>Hello Hospital !</h1>
      <div className="menu-items">
        <motion.button
          className="menu-item"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
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