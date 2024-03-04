import React, { useState } from 'react';
import contact_img from "../../../assets/contact_img.png";

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
   
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, padding: '20px' }}>
    <h2>Contact Us</h2>
      <img src={contact_img} alt="Contact Us" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
    <div style={{ flex: 2, padding: '20px'}}>
     
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '50%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Contact Us Now</button>
      </form>
    </div>
  </div>
);
};

export default Contact_us;