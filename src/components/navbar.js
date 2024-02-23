import React from 'react';

const Navbar = ({ onDashboardButtonClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Staff Details</a></li>
        <li><a href="#">Staff Attendence</a></li>
        <li><a href="#">Biometric Attendence</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Staff Leaves</a></li>
        <li><a href="#">Staff</a></li>
        <li><button className="dashboard-button" onClick={onDashboardButtonClick}>Report</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
