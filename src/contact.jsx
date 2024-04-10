import React, { useState } from 'react';
import './css/contact.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Contact() {

  const nav =useNavigate();
  const [formData, setFormData] = useState({
    cname: '',
    cemail: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post('https://65fd91889fc4425c6532474d.mockapi.io/medicine',formData)

   .then (response=>{
    console.log(response);
    nav("/")
    
  })
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input
          className='.inputc'
            type="text"
            name="cname"
            value={formData.cname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
           className='.inputc'
            type="email"
            name="cemail"
            value={formData.cemail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
           className='.inputc'
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button  className='.inputc' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
