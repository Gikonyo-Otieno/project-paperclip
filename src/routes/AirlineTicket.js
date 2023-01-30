import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Airline from '../components/Airline'

const AirlineTicket = () => {
  return (                                
    <div>
      <Navbar />
      <Heroimg2 heading="AIR TICKETS" text="Purchase Flight Tickets to any Destination in the World"/>
      <Airline/>
      <Footer />
    </div>
  )
}

export default AirlineTicket