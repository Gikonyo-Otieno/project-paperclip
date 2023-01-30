import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import { useParams } from 'react-router-dom'



const Home = () => {
    const [events, setEvents] = useState(null)
    const {id} = useParams()

    const handleDelete = (id) => {
      let copy = [...this.state.events]
      copy.splice(id, 1)
      this.setEvents({events:copy})
 
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