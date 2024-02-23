import React from 'react';

const RegistrationForm = ({ formData, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Registration Form</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onInputChange}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        required
      />
      <label htmlFor="contact">Contact:</label>
      <input
        type="tel"
        id="contact"
        name="contact"
        value={formData.contact}
        onChange={onInputChange}
        required
      />
      {/* Add more form fields here */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
