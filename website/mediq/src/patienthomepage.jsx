import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Hospital, Star, Linkedin, Github, Phone, Mail } from 'lucide-react';
import './PatientHomePage.css';
import AdhiProfile from './assets/Adhithya-profile.jpg';
import PaulProfile from './assets/Paul-profile.jpg';
import AjayProfile from './assets/Ajay-profile.jpg';

const hospitals = [
  { id: 1, name: "Kauvery Hospital", rating: "4.5", status: "Available" },
  { id: 2, name: "KMC Hospital", rating: "3.8", status: "Busy" },
  { id: 3, name: "Stanley Medical Hospital", rating: "4.2", status: "Available" },
  { id: 4, name: "Chennai National Hospital", rating: "4.7", status: "Available" },
  { id: 5, name: "Gleneagles Global Health City", rating: "4.0", status: "Busy" },
  { id: 6, name: "Rajiv Gandhi Government Hospital", rating: "4.4", status: "Available" },
];

const creators = [
  { name: "Adhidhya J", image: AdhiProfile },
  { name: "K.Israel Paul", image: PaulProfile},
  { name: "Ajay S Vasan", image: AjayProfile },
  { name: "D.Frank Jeyasingh", image: "/api/placeholder/80/80" },
  { name: "Ashik", image: "/api/placeholder/80/80" },
];

function Navigation({ searchTerm, setSearchTerm, isSearchFocused, setIsSearchFocused, filteredHospitals }) {
  const navigate = useNavigate();

  return (
    <nav className={`nav ${window.scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <motion.h1 
          className="nav-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mediq
        </motion.h1>
        <div className={`search-container ${isSearchFocused ? 'focused' : ''}`}>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for hospitals..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
          </div>
          {isSearchFocused && searchTerm && (
            <div className="dropdown-box">
              {filteredHospitals.map((hospital) => (
                <div 
                  key={hospital.id} 
                  className="dropdown-item"
                  onClick={() => navigate(`/doctors/${hospital.id}`)}
                >
                  <Hospital size={16} className="hospital-icon" />
                  <span>{hospital.name}</span>
                  <span className="hospital-rating">
                    <Star size={12} className="star-icon" />
                    {hospital.rating}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function PatientHomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const filtered = hospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHospitals(filtered);
  }, [searchTerm]);

  const handleHospitalClick = (hospitalId) => {
    navigate(`/doctors/${hospitalId}`);
  };

  return (
    <div className="patient-home">
      <Navigation 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        isSearchFocused={isSearchFocused}
        setIsSearchFocused={setIsSearchFocused}
        filteredHospitals={filteredHospitals}
      />
      
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
          {filteredHospitals.map((hospital, index) => (
            <motion.div 
              key={hospital.id} 
              className="hospital-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleHospitalClick(hospital.id)}
            >
              <Hospital size={24} color="#7EB6B6" />
              <h3>{hospital.name}</h3>
              <p><Star size={16} color="#7EB6B6" /> {hospital.rating}</p>
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
          <h3>Developers</h3>
          <div className="creators-list">
            {creators.map((creator, index) => (
              <div key={index} className="creator-item" style={{"--item-index": index}}>
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