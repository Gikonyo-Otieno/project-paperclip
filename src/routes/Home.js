import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'



// function Data (){
//     const [Data, setData] = useState([]);

//     useEffect(() => {
//       fetch("http://localhost:3000/eventData")
//         .then((response) => response.json())
//         .then((data) => {
//           setData(data);
//         });
//     }, []);
// }


const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <EventCard />
        <Footer />
    </div>
  )
}

export default Home