import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Phone, Mail } from 'lucide-react';
import './PatientHomePage.css';

const hospitals = [
  { name: "Hospital 1", rating: "4.5", status: "Free" },
  { name: "Hospital 2", rating: "3.8", status: "Busy" },
  { name: "Hospital 3", rating: "4.2", status: "Free" },
];

export default function PatientHomePage() {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const AppointmentForm = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal"
      onClick={() => setShowForm(false)}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="form-container"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={() => setShowForm(false)}
          className="close-btn"
        >
          <X size={24} />
        </button>
        <h2>Book Appointment</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>Select Hospital</label>
            <select>
              <option value="">Choose a hospital</option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital.name}>{hospital.name}</option>
              ))}
            </select>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary"
          >
            Book Now
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );

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
          <motion.button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.button>
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

      <AnimatePresence>
        {showForm && <AppointmentForm />}
      </AnimatePresence>
    </div>
  );
}