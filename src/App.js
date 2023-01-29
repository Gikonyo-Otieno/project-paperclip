import React from 'react';
// import Navbar from './components/Navbar'
import './App.css';
import Home from './routes/Home';
import Airline from './routes/Airline';
import Movies from './routes/Movies';
import Signup from './routes/Signup';
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/project" element = {<Movies />} />
        <Route path="/about" element = {<Airline />} />
        <Route path="/contact" element = {<Signup />} />
      </Routes>
    </>
  );
}

export default App;
