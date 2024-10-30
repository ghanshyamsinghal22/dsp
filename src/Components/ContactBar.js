import React from 'react';
import './ContactBar.css'; 

const ContactBar = () => {
  return (
    <div className="contact-bar">
      <div className="contact-left">
        Contact us
      </div>
      <div className="contact-right">
        <a href="https://wa.me/+919772145375" target="_blank" rel="noopener noreferrer" className="contact-link">
        +91 9772145375
        </a>
        <span className="contact-separator">|</span>
        <a href="mailto:madhavsinghalvip@gmail.com" className="contact-link">
          Email: madhavsinghalvip@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
