import React from 'react'
import "./PricingCardStyles.css"
import {Link} from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Now Showing</h3>
          <span className="bar"></span>
          <p className="btc">The Gentlemen</p>
          <p>$ 50</p>
          <p>Early -11:00-13:30</p>
          <p>Afternoon -14:00-16:30</p>
          <p>Evening -18:00-20:30</p>
          <p>Late -21:30-00:00</p>
          <Link to="/contact" className="btn">
            BUY NOW
          </Link>
        </div>

        <div className="card">
          <h3>Now Showing</h3>
          <span className="bar"></span>
          <p className="btc">The Batman</p>
          <p>$ 80</p>
          <p>Early -11:00-13:30</p>
          <p>Afternoon -14:00-16:30</p>
          <p>Evening -18:00-20:30</p>
          <p>Late -21:30-00:00</p>
          <Link to="/contact" className="btn">
            BUY NOW
          </Link>
        </div>

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
      </div>
    </div>
  )
}

export default PricingCard