import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Hospital, Star } from 'lucide-react';
import './doctorList.css';
import Kavdoc1 from './assets/Kauvery/doc1.png';
import Kavdoc3 from './assets/Kauvery/doc3.png';

const doctorsData = {
  1: [
    { id: 1, name: "Dr. John Doe", specialization: "Cardiology", image: Kavdoc1 },
    { id: 2, name: "Dr. Jane Smith", specialization: "Neurology", image: Kavdoc3 },
    { id: 3, name: "Dr. Mike Johnson", specialization: "Orthopedics", image: "/api/placeholder/150/150" },
  ],
  2: [
    { id: 4, name: "Dr. Emily Brown", specialization: "Pediatrics", image: "/api/placeholder/150/150" },
    { id: 5, name: "Dr. David Lee", specialization: "Oncology", image: "/api/placeholder/150/150" },
  ],
  // Add more doctors for other hospitals...
};

const hospitalData = {
  1: { name: "Kauvery Hospital", banner: "/api/placeholder/1200/150" },
  2: { name: "KMC Hospital", banner: "/api/placeholder/1200/150" },
  // Add more hospitals...
};

function Navigation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav-content">
        <motion.h1 
          className="nav-logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate('/patienthomepage')}
        >
          Mediq
        </motion.h1>
        <div className={`search-container ${isSearchFocused ? 'focused' : ''}`}>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for doctors..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function DoctorsPage() {
  const { hospitalId } = useParams();
  const doctors = doctorsData[hospitalId] || [];
  const hospital = hospitalData[hospitalId] || { name: "Unknown Hospital", banner: "/api/placeholder/1200/150" };

  return (
    <div className="doctors-page">
      <Navigation />
      <div className="hospital-banner" style={{ backgroundImage: `url(${hospital.banner})` }}>
        <h1>{hospital.name}</h1>
      </div>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            className="doctor-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <button className="book-appointment">
              <Calendar size={16} />
              Book Appointment
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}