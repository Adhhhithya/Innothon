import React, { useState } from "react";
import './Hospitalregister.css';

const HospitalRegister = () => {
    const [specialization, setSpecialization] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted");
    };

    return (
        <div className="H-register">
            <div className="logo">Logo</div>
            <h2 className="form-title">HOSPITAL SIGN-UP</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="left-section">
                    <div className="form-group">
                        <label>Hospital Name:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>City, State, Country:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Pin Code:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Office Ph. No:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Email ID:</label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Specializations:</label>
                        <select className="selection" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required>
                            <option value="" disabled>Select Specialization</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="Gynecology">Gynecology</option>
                            <option value="Oncology">Oncology</option>
                            <option value="General Surgery">General Surgery</option>
                            {/* Add more specializations as necessary */}
                        </select>
                    </div>
                </div>
                <div className="right-section">
                    <div className="form-group">
                        <label>Admin Username:</label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" required />
                    </div>
                    <div className="form-group checkbox-group">
                        <label><input type="checkbox" required /> Terms of Service</label>
                        <label><input type="checkbox" required /> HIPAA compliance</label>
                        <label><input type="checkbox" required /> GDPR compliance</label>
                    </div>
                </div>
                <button type="submit" className="submit-btn">Complete Registration</button>
            </form>
        </div>
    );
}

export default HospitalRegister;



