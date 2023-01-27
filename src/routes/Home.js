import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Card from '../components/Footer'



function Data (){
    const [Data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/eventData")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }, []);
}


const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <Card />
        <Footer />
    </div>
  )
}

export default Home