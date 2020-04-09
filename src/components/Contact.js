import React from 'react'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact  Us</h3>
      <div className="contact-wrap">
        <div className="cont1">
          
          <p><i className="fas fa-phone"></i> +2348064532849</p>
          <p><i className="fas fa-map-marker-alt"></i>13, JOHN STREET</p>
          <p><i className="fas fa-envelope"></i> info@freya.com</p>
        </div>
        <div className="cont2">
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Enter Email" />
          <textarea name="message" rows="4" placeholder="type your message"></textarea>
          <button>SEND MESSAGE</button>
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  )
}
