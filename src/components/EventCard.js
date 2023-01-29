import './EventCardStyles.css'
import {Link} from "react-router-dom"

import React from 'react'

const EventCard = () => {
  return (
    <div className="card">
            <h3>Now Showing</h3>
            <span className="bar"></span>
            <p className="btc">Bullet Train</p>
            <p>$ 65</p>
            <p>Early -11:00-13:30</p>
            <p>Afternoon -14:00-16:30</p>
            <p>Evening -18:00-20:30</p>
            <p>Late -21:30-00:00</p>
            <Link to="/contact" className="btn">
            BUY NOW
            </Link>
    </div>
  )
}

export default EventCard

// <div className="card">
// <h3>{date}</h3>
// <span className="bar"></span>
// <p className="btc">{name}</p>
// <p>Reg: {price1}</p>
// <p>VIP: {price2}</p>
// <p>Venue: {venue}</p>
// <p>{time}</p>
// <Link to="/contact" className="btn">
//   BUY NOW
// </Link>
// </div>