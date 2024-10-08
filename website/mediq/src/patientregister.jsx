import React, { useState } from "react";
import './PatientRegister.css';
import { motion } from 'framer-motion';

const PatientRegister = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        age: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',
        username: '',
        password: '',
        locationAccess: false,
        termsAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Registration complete!");
    };

    return (
        <div className="P-register">
            <motion.header 
                className="header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="nav-logo">Mediq</h1>
            </motion.header>
            
            <motion.h2 
                className="form-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Patient Registration
            </motion.h2>
            
            <motion.form 
                onSubmit={handleSubmit} 
                className="signup-form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="left-section">
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Mobile No:</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Email ID:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Age:</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Gender:</label>
                        <select name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Country:</label>
                        <select name="country" value={formData.country} onChange={handleChange} required>
                            <option value="" disabled>Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Britain">Britain</option>
                        </select>
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>State:</label>
                        <select name="state" value={formData.state} onChange={handleChange} required>
                            <option value="" disabled>Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>City:</label>
                        <select  name="city" value={formData.city} onChange={handleChange} required>
                            <option value="" disabled>Select City</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Vellore">Vellore</option>
                            <option value="Coimbatore">Coimbatore</option>
                        </select>
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Pin Code:</label>
                        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} required />
                    </motion.div>
                </div>
                
                <div className="right-section">
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Username:</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </motion.div>
                    <motion.div className="form-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </motion.div>
                </div>
                
                <motion.div className="checkbox-group" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                    <label className="checkbox-label">
                        <input type="checkbox" name="locationAccess" checked={formData.locationAccess} onChange={handleChange} />
                        I agree to share my location
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} required />
                        I agree to the Terms and Conditions
                    </label>
                </motion.div>
                
                <motion.button 
                    type="submit" 
                    className="submit-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Complete Registration
                </motion.button>
            </motion.form>
        </div>
    );
}
export default PatientRegister;