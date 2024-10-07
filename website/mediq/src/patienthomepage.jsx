import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Phone, Mail } from 'lucide-react';
import './PatientHomePage.css';

const hospitals = [
  { name: "Kauvery", rating: "4.5", status: "Free" },
  { name: "KMC", rating: "3.8", status: "Busy" },
  { name: "Stanley", rating: "4.2", status: "Free" },
  { name: "Chennai National Hospital", rating: "4.7", status: "Free" },
  { name: "Gleneagles", rating: "4.0", status: "Busy" },
  { name: "Rajiv Gandhi ", rating: "4.4", status: "Free" },
];

const creators = [
  { name: "Adhidhya J", image: "/assets/Adhithya-profile.jpg" },
  { name: "K.Israel Paul", image: "/assets/Paul-profile.jpg" },
  { name: "Ajay S Vasan", image: "/assets/Ajay-profile.jpg" },
  { name: "D.Frank Jeyasingh", image: "/api/placeholder/50/50" },
  { name: "Ashik", image: "/api/placeholder/50/50" },
];

export default function PatientHomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="patient-home">
      <nav className={`nav ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <motion.h1 
            className="nav-logo"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mediq
          </motion.h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for hospitals..." />
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find Your Perfect Care
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover top-rated hospitals and book appointments with ease.
          </motion.p>
        </div>
      </section>

      <section className="hospitals">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Hospitals
        </motion.h2>
        <div className="hospital-list">
          {hospitals.map((hospital, index) => (
            <motion.div 
              key={index} 
              className="hospital-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{hospital.name}</h3>
              <p>Rating: {hospital.rating}</p>
              <p>Status: {hospital.status}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <div className="contact-content">
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={20} />
              <span>9696969696</span>
            </div>
            <div className="contact-item">
              <Mail size={20} />
              <span>codeofduty69@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="creators">
          <h3>Creators</h3>
          <div className="creators-list">
            {creators.map((creator, index) => (
              <div key={index} className="creator-item">
                <img src={creator.image} alt={creator.name} />
                <span>{creator.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}