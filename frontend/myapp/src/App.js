import React from 'react';
import './App.css';
import shape1  from "./shape1.png"

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
    <div>

    
<section className="content">
        <div className="left-content">
          <h2 className="he">Join Your <br /> Neighborhood <br /> Association Today</h2>
          <p id="hetext">Neighbor Nest is the perfect platform to connect with your neighborhood association and work together to improve your community. With collaborative event planning, project coordination, and resource sharing, Neighbor Nest makes it easy to  bring your neighbors together.</p>
          <a href="#services" id="button"> View All Services</a>
        </div>
        <div className="right-content">
          <img src={shape1} alt="Neighborhood" />
        </div>
      </section>

<div className="cont-container">
  <section id="about" className="content">
    <h2>Organize and Empower Your Neighborhood Projects</h2>
    <p>Neighbor Nest is the perfect platform to connect with your neighborhood association and work together to improve your community. With collaborative event planning, project coordination, and resource sharing, Neighbor Nest makes it easy to bring your neighbors together.</p>
    <a href="#learn-more">Learn More</a>
  </section>
</div>

<div class="serv-container">
  <section id="services" class="content">
    <h2>Our Services</h2>
    <div class="service-grid">
      <div>
        <p>We collaborate with our neighbors to implement impactful projects that aim to improve our community, and provide support and guidance throughout the process.</p>
        <a href="#read-more1">Read More</a>
      </div>
      <div>
        <p>Join us for fun and engaging community events that bring neighbors together and foster a sense of community.</p>
        <a href="#read-more2">Read More</a>
      </div>
      <div>
        <p>Our resource sharing platform enables neighbors to share skills, tools, and knowledge to help each other out, building a stronger and more connected community.</p>
        <a href="#read-more3">Read More</a>
      </div>
    </div>
  </section>
</div>


<div class="feat-container">
  <section id="features" class="content">
    <h2>Features</h2>
    <div class="features-container">
      <div class="left-features">
        <div class="feature">
          <h3>Collaborative Event Planning</h3>
          <p>Plan events with your neighbors effortlessly, making community activities more engaging and inclusive.</p>
        </div>
        <div class="feature">
          <h3>Community Building</h3>
          <p>Build a stronger sense of community by connecting with your neighbors and participating in local initiatives.</p>
        </div>
        <div class="feature">
          <h3>Efficient Project Coordination</h3>
          <p>Coordinate projects seamlessly with tools that streamline communication and task management.</p>
        </div>
        <div class="feature">
          <h3>Improved Quality of Life</h3>
          <p>Work together to implement projects that enhance the quality of life in your neighborhood.</p>
        </div>
        <div class="feature">
          <h3>Resource Sharing Made Easy</h3>
          <p>Share resources such as skills, tools, and knowledge, fostering a culture of support and collaboration.</p>
        </div>
      </div>
      <div class="right-features">
        <div class="feature">
          <h3>Strengthened Neighborhood Bonds</h3>
          <p>Forge stronger bonds with your neighbors as you collaborate on projects and participate in community events.</p>
        </div>
        <div class="feature">
          <h3>Intuitive Dashboard</h3>
          <p>Access all features and tools through an intuitive dashboard designed for ease of use.</p>
        </div>
        <div class="feature">
          <h3>User-Friendly Platform</h3>
          <p>Enjoy a user-friendly platform that makes it simple to navigate and accomplish tasks.</p>
        </div>
        <div class="feature">
          <h3>Friendly Support Team</h3>
          <p>Receive assistance and guidance from a friendly support team dedicated to helping you succeed.</p>
        </div>
        <div class="feature">
          <h3>Reliable Support and Assistance</h3>
          <p>Count on reliable support and assistance whenever you encounter challenges or have questions.</p>
        </div>
      </div>
    </div>
  </section>
</div>


</div>
);
}

export default App;
