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
        <Route path="/movies" element = {<Movies />} />
        <Route path="/airline" element = {<Airline />} />
        <Route path="/signup" element = {<Signup />} />
      </Routes>
    </>
  );
}

export default App;
