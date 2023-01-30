import './PricingCardStyles.css'
import {Link} from "react-router-dom"

import React from 'react'

const EventCard = ({events, handleDelete}) => {
  return (
    <div className="card">
        {events.map((event) => (
          <div className="card">
            <h3>{event.date}</h3>
            <span className="bar"></span>
            <p className="btc">{event.name}</p>
            <p>{event.venue}</p>
            <p>{event.time}</p>
            <p>Reg:{event.price1}</p>
            <p>VIP:{event.price2}</p>
            <button className="delete" onClick={() => handleDelete(event.id)}>X</button>
            <Link to="/contact" className="btn">
                BUY NOW
            </Link>
          </div>

        ))}
    </div>
  )
}

export default EventCard
