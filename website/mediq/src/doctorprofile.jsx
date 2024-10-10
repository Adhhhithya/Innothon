import React from 'react';
import './Doctorprofile.css';
import Image2 from './assets/Mediq-logo.png';

const DoctorProfile = () => {
  return (
    <div className="pro">
      <div className="hospital-logo">
        <img src={Image2} alt="Hospital Logo" />
      </div>
      <div className="header">
        <span className="hospital-logo-text">Hospital Logo</span>
        <div className="hospital-cover-photo">
            Hospital Cover Photo
        </div>
      </div>

      {/* Doctor Profile Section */}
      <section className="doctor-profile">
        <div className="profile-photo">
          <img src="#" alt="Doctor" />
        </div>
        <div className="doctor-info">
          <p><strong>Doctor Name:</strong> Dr. John Doe</p>
          <p><strong>Specialization:</strong> Cardiology</p>
          <p><strong>Patient Reviews:</strong> ★★★★☆</p>
        </div>
      </section>

      {/* Appointments Section */}
      <section className="appointments">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Day</th>
              <th>Time</th>
              <th>Patient Name</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10/09/2024</td>
              <td>Wednesday</td>
              <td>10:00 AM</td>
              <td>John Smith</td>
              <td><a href="#">View</a></td>
            </tr>
            <tr>
              <td>10/10/2024</td>
              <td>Thursday</td>
              <td>12:00 PM</td>
              <td>Jane Doe</td>
              <td><a href="#">View</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer Section */}
      <footer>
        <button className="reserve-btn">Reserve Doctor</button>
      </footer>
      <footer className="footer1">MEDIQ</footer>
    </div>
  );
};

export default DoctorProfile;
