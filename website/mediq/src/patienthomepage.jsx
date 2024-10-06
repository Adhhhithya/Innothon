import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Phone, Mail } from 'lucide-react';
import './Patienthomepage.css'

const hospitals = [
  { name: "Hospital 1", rating: "4.5", status: "Free" },
  { name: "Hospital 2", rating: "3.8", status: "Busy" },
  { name: "Hospital 3", rating: "4.2", status: "Free" },
];

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealElementsOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    window.addEventListener('scroll', revealElementsOnScroll);
    return () => window.removeEventListener('scroll', revealElementsOnScroll);
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
          className="btn"
        >
          <X size={24} />
        </button>
        <h2 className="mb-2">Book Appointment</h2>
        <form className="form-group">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Age</label>
            <input type="number" className="form-input" />
          </div>
          <div className="form-group">
            <label className="form-label">Select Hospital</label>
            <select className="form-input">
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
            Pay Now
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="p-home">
      <nav className="nav">
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
            <input type="text" placeholder="Search for hospitals..." className="search-input" />
          </div>
        </div>
      </nav>

      <section className="section">
        <motion.h2 
          className="mb-2 text-accent reveal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hospitals
        </motion.h2>
        <div className="hospital-list">
          {hospitals.map((hospital, index) => (
            <div key={index} className="hospital-item reveal">
              <h3>{hospital.name}</h3>
              <p>Rating: {hospital.rating}</p>
              <p>Status: {hospital.status}</p>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {showForm && <AppointmentForm />}
      </AnimatePresence>
    </div>
  );
}
