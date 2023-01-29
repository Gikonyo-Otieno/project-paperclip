import './HeroimgStyles.css'

 import React from 'react'
 import IntroImg from '../assets/IntroImg.jpg'
import {Link} from 'react-router-dom'
 const Heroimg = () => {
    return (
        <div className = "hero">
            <div className = "mask">
                <img className= "into-img" src = {IntroImg} alt=""/>

            </div>
            <div className="content">
                <p>YOUR ONE STOP SHOP FOR TICKETS</p>
                <h1>Find Events Here</h1>
                <div>
                    <Link to="/project" className= "btn">Movies</Link>
                    <Link to="/contact" className= "btn btn-light">Sign Up</Link>
                </div>
            </div>
        </div>
    )
 }

 export default Heroimg