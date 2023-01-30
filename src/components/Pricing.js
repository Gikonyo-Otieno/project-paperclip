import React from 'react'
import "./PricingCardStyles.css"
import {Link} from "react-router-dom"





const Pricing = (props) => {
  return (
    <div className="card">
        <h3>{props.status}</h3>
        <span className="bar"></span>
        <p className="btc">{props.movie}</p>
        <p>{props.price}</p>
        <p>{props.early}</p>
        <p>{props.afternoon}</p>
        <p>{props.evening}</p>
        <p>{props.late}</p>
        <Link to="/contact" className="btn">
        BUY NOW
        </Link>
  </div>
  )
}

export default Pricing