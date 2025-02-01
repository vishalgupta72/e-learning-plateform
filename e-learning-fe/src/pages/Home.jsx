import React,{useState} from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Maritime Learning Management Platform</h1>
        <p>Your Gateway to Seamless Maritime Training and Mental Wellness</p>
        <Link to="/courses">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAT_l2xb2CbERlj0N28UoklH3jpLrlHxYIBA&s" alt="Comprehensive Courses" className="feature-image" />
            <h3>Comprehensive Courses</h3>
            <p>Access a wide range of maritime courses designed to enhance your skills and knowledge.</p>
          </div>
          <div className="feature-card">
            <img src="https://abrighterday.info/wp-content/uploads/2023/01/Screenshot-2023-01-18-at-2.02.17-PM-1024x682.png" alt="Mental Wellness" className="feature-image" />
            <h3>Mental Wellness</h3>
            <p>Stay healthy and focused with our mental wellness resources tailored for seafarers.</p>
          </div>
          <div className="feature-card">
            <img src="https://www.actitime.com/wp-content/uploads/2020/12/How-to-Track-a-Projects-Progress.png" alt="Progress Tracking" className="feature-image" />
            <h3>Progress Tracking</h3>
            <p>Monitor your learning progress and stay on top of your training goals.</p>
          </div>
        </div>
      </section>

      <section className="courses-overview-section">
        <h2>Explore Our Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <img src="https://bunny-wp-pullzone-stjik7d26w.b-cdn.net/wp-content/uploads/2021/01/IMG-1450-edited-2048x1152.jpg" alt="Navigation & Seamanship" className="course-image" />
            <h3>Navigation & Seamanship</h3>
            <p>Master the fundamentals of maritime navigation and seamanship.</p>
          </div>
          <div className="course-card">
            <img src="https://bunny-wp-pullzone-stjik7d26w.b-cdn.net/wp-content/uploads/2021/01/IMG-1450-edited-2048x1152.jpg" alt="Navigation & Seamanship" className="course-image" />
            <h3>Navigation & Seamanship</h3>
            <p>Master the fundamentals of maritime navigation and seamanship.</p>
          </div>
          <div className="course-card">
            <img src="https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/11/Maritime-Safety-featured.jpg" alt="Maritime Safety" className="course-image" />
            <h3>Maritime Safety</h3>
            <p>Learn the essential safety protocols and regulations in the maritime industry.</p>
          </div>
          <div className="course-card">
            <img src="https://wp-website.safetyculture.com/wp-content/uploads/sites/3/2023/11/Maritime-Safety-featured.jpg" alt="Maritime Safety" className="course-image" />
            <h3>Maritime Safety</h3>
            <p>Learn the essential safety protocols and regulations in the maritime industry.</p>
          </div>
          <div className="course-card">
            <img src="https://www.girikmaritime.com/wp-content/uploads/2023/05/ERRM-1Image.jpg" alt="Engine Room Management" className="course-image" />
            <h3>Engine Room Management</h3>
            <p>Gain in-depth knowledge of engine room operations and maintenance.</p>
          </div>
          <div className="course-card">
            <img src="https://www.girikmaritime.com/wp-content/uploads/2023/05/ERRM-1Image.jpg" alt="Engine Room Management" className="course-image" />
            <h3>Engine Room Management</h3>
            <p>Gain in-depth knowledge of engine room operations and maintenance.</p>
          </div>
        </div>
        <Link to="/courses">
          <button className="explore-button">Explore All Courses</button>
        </Link>
      </section>

      <footer className="footer">
        <p>© 2024 Maritime LMP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
