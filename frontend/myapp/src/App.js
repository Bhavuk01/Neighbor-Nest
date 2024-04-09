import React from 'react';
import './App.css';
import  shape1 from './shape1.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#community">Community</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#signup">Signup</a></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="home-container">
      <section id="community" className="content">
        <h2 className='he'>Join Your <br/> Neighborhood <br/> Association Today</h2>
        <p>Neighbor Nest is the perfect platform to connect with your neighborhood association and work together to improve your community. With collaborative event planning, project coordination, and resource sharing, Neighbor Nest makes it easy to bring your neighbors together.</p>
        <a href="#services">View All Services</a>
      </section>
      <div className="image-container">
        <img src={shape1} alt="" />
      </div>
    </div>
  );
}

export default App;
