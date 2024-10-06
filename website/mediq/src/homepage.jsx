import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Phone, Mail } from 'lucide-react';

const doctors = [
  "Dr. Sarah Johnson - Cardiologist",
  "Dr. Michael Chen - Neurologist",
  "Dr. Emily Brown - Pediatrician",
  "Dr. David Wilson - Orthopedist"
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
            <label className="form-label">Select Doctor</label>
            <select className="form-input">
              <option value="">Choose a doctor</option>
              {doctors.map(doctor => (
                <option key={doctor} value={doctor}>{doctor}</option>
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
    <div className="body">
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
          <motion.div 
            className="nav-links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['About', 'Appointment', 'Contact'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="nav-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>

      <section id="about" className="section">
        <motion.div 
          className="parallax-bg"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
            y: scrollY * 0.5 
          }}
        />
        <div className="overlay" />
        <div className="section-content">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="reveal"
          >
            <h2 className="mb-2">About</h2>
            <p className="mb-1">
              Dedicated to providing advanced healthcare solutions with a patient-first approach.
            </p>
            <p className="mb-2">
              Our team of experienced doctors ensures you receive the best medical care tailored to your needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section id="appointment" className="section">
        <motion.div 
          className="parallax-bg"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
            y: (scrollY - window.innerHeight) * 0.5 
          }}
        />
        <div className="overlay" />
        <div className="section-content">
          <motion.h2 
            className="mb-2 text-accent reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Appointment
          </motion.h2>
          <motion.button
            onClick={() => setShowForm(true)}
            className="btn btn-primary reveal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book Now
          </motion.button>
        </div>
      </section>

      <section id="contact" className="section">
        <motion.div 
          className="parallax-bg"
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
            y: (scrollY - window.innerHeight * 2) * 0.5 
          }}
        />
        <div className="overlay" />
        <div className="section-content">
          <motion.h2 
            className="mb-4 text-accent reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.div 
            className="contact-links reveal"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a 
              href="https://linkedin.com" 
              whileHover={{ scale: 1.1, color: '#FF0000' }}
              className="contact-link"
            >
              <Linkedin size={48} />
            </motion.a>
            <motion.a 
              href="tel:+1234567890" 
              whileHover={{ scale: 1.1, color: '#FFC107' }}
              className="contact-link"
            >
              <Phone size={48} />
            </motion.a>
            <motion.a 
              href="mailto:contact@mediq.com" 
              whileHover={{ scale: 1.1, color: '#2196F3' }}
              className="contact-link"
            >
              <Mail size={48} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showForm && <AppointmentForm />}
      </AnimatePresence>
    </div>
  );
}