import React from 'react'
import "./PricingCardStyles.css"
import {Link} from "react-router-dom"
import AirlineCard from './AirlineCard.js'
import AirlineCardData from './AirlineCardData'

const Airline = () => {
    return (
        <div className="pricing">
        <div className="card-container">

          {AirlineCardData.map((val, ind) => {
           return (
               <AirlineCard key={ind} date={val.date} destination={val.destination} from={val.from} price={val.price} departure={val.departure} arrival={val.arrival} type={val.type}  />
                 )
            })}
            
  
  
        </div>
      </div>
    )
}


  export default Airline