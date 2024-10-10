import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react"; // Import the Calendar icon
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import './Patientbookings.css';
import Image1 from "./assets/Mediq-logo.png";

const PatientBookings = () => {
    const [doctors, setDoctors] = useState([
        { name: "Dr. John Doe", duty: "11am - 3pm", route: "/doctor/johndoe" },
        { name: "Dr. Jane Smith", duty: "1pm - 5pm", route: "/doctor/janesmith" },
        { name: "Dr. Emily Davis", duty: "9am - 1pm", route: "/doctor/emilydavis" },
        { name: "Dr. Michael Brown", duty: "2pm - 6pm", route: "/doctor/michaelbrown" },
        { name: "Dr. Tim Fischer", duty: "3pm - 8pm", route: "/doctor/timfischer"},
        { name: "Dr. Mandy Thompson", duty: "2pm - 7pm", route: "/doctor/mandythompson"},
        { name: "Dr. Jimmy Larsson", duty: "11am - 4pm", route: "/doctor/jimmylarsson"},
        { name: "Dr. Peter Johnson", duty: "2pm - 5pm", route: "/doctor/peterjohnson"},
    ]);

    const buttonVariants = {
        rest: {
            scale: 1,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)"
        },
        hover: {
            scale: 1.05,
            boxShadow: "0px 5px 10px rgba(0,0,0,0.2)"
        },
        tap: {
            scale: 0.95
        }
    };

    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const handleDoctorClick = (route) => {
        navigate(route); // Navigate to the doctor's profile route
    };

    return (
        <div className="dash1">
            {/* Header Section */}
            <div className="hospital-logo">
                <img src={Image1} alt="Hospital Logo" />
            </div>
            <div className="header">
                <span className="hospital-logo-text">Hospital Logo</span>
                <div className="hospital-cover-photo">
                    Hospital Cover Photo
                </div>
            </div>
    
            {/* Patient Bookings Section */}
            <div className="content-container">
                <div className="patient-bookings-header">
                    <h2>
                        <Calendar className="booking-icon" size={24} /> {/* Add the Calendar icon */}
                        Patient Bookings
                    </h2>
                </div>
                <div className="bookings">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            className="booking-card"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => handleDoctorClick(doctor.route)} // Add onClick to handle navigation
                        >
                            <div className="doctor-avatar">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Doctor Avatar"
                                />
                            </div>
                            <div className="doctor-info">
                                <p>{doctor.name}</p>
                                <p>Duty: {doctor.duty}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <footer className="footer">MEDIQ</footer>
        </div>
    );
};

export default PatientBookings;

