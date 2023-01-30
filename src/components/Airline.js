import React from 'react'
import "./PricingCardStyles.css"

import AirlineCard from './AirlineCard.js'
import AirlineCardData from './AirlineCardData'

const Airline = () => {
    return (
      <div className="pricing">
        <div className="card-container">
          <div className="card">
          {AirlineCardData.map((val, ind)=> {
              return(
                <AirlineCard key={ind} date={val.date} destination={val.destination} from={val.from} price={val.price} departure={val.departure} arrival={val.arrival} type={val.type}/>
              )
            })}
          </div>

            
  
   
        </div>
      </div>
    )
  }

  export default Airline