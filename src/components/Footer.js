import './FooterStyles.css'

import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone, FaFacebook, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className = "footer-container">
            <div className="left">
                <div className = "location">
                    <FaHome  size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                      <p>City of Nairobi</p>
                      <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className = "phone">
                  <h4><FaPhone size ={20} style={{color: "#fff", marginRight: "2rem"}}/> +254-987-654-321 
                  </h4>
                </div>
                <div className = "email">
                  <h4><FaMailBulk size ={20} style={{color: "#fff", marginRight: "2rem"}}/> info@example.com
                  </h4>
                </div>
            </div>
            <div className="right ">
              <h4>About Us</h4>
              <p>This is an experimental ticketing website</p>
              <div className="social">
                <FaFacebook size = {20} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaTwitter size = {20} style={{color: "#fff", marginRight: "1rem"}}/>
                <FaLinkedin size = {20} style={{color: "#fff", marginRight: "1rem"}}/>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer