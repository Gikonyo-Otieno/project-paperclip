import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'



const Home = () => {
    const [events, setEvents] = useState(null)

    const handleDelete = (id) => {
      const newEvents = events.filter(event => event.id !== id);
      setEvents(newEvents)
    }
    useEffect(() => {
      fetch('http://localhost:3000/eventData')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
        setEvents(data)
      })
    }, [])
    
  return (
    <div>
        <Navbar />
        <Heroimg />
        {events && <EventCard events={events} handleDelete/>}
        <Footer />
    </div>
  )
}

export default Home