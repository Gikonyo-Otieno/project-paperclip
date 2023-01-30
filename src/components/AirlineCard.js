import './PricingCardStyles.css'
import {Link} from "react-router-dom"


import React from 'react'

const AirlineCard = (props) => {
  return (
    <div className="card">
            <h3>{props.date}</h3>
            <span className="bar"></span>
            <p className="btc">{props.destination}</p>
            <p>{props.from}</p>
            <p>{props.price}</p>
            <p>{props.departure}</p>
            <p>{props.arrival}</p>
            <p>{props.type}</p>
            <Link to="/contact" className="btn">
            BUY NOW
            </Link>
    </div>
  )
}

export default AirlineCard