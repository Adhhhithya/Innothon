import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const doctorsData = {
  1: [
    { id: 1, name: "Dr. John Doe", specialization: "Cardiology", image: "/api/placeholder/150/150" },
    { id: 2, name: "Dr. Jane Smith", specialization: "Neurology", image: "/api/placeholder/150/150" },
    { id: 3, name: "Dr. Mike Johnson", specialization: "Orthopedics", image: "/api/placeholder/150/150" },
  ],
  2: [
    { id: 4, name: "Dr. Emily Brown", specialization: "Pediatrics", image: "/api/placeholder/150/150" },
    { id: 5, name: "Dr. David Lee", specialization: "Oncology", image: "/api/placeholder/150/150" },
  ],
  // Add more doctors for other hospitals...
};

export default function DoctorsPage({ hospitals }) {
  const { hospitalId } = useParams();
  const hospital = hospitals.find(h => h.id === parseInt(hospitalId));
  const doctors = doctorsData[hospitalId] || [];

  return (
    <div className="doctors-page">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Doctors at {hospital ? hospital.name : 'Hospital'}
      </motion.h1>
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