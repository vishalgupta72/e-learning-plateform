import React, { useState } from "react";
import "./navbar.css";
import {NavLink, useNavigate} from 'react-router-dom'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // dispatch({type: "LOGIN_ERROR"});
    navigate("/login");
}

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>E-Learning Platform</h1>
            <div className="hamburger" onClick={toggleMenu}>
              ☰
            </div>
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/myprogess">My Progress</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>

          <div className="login-button">
            <NavLink to="/login">Login</NavLink>
           
            { localStorage.getItem("token") === null ?  "" : <button onClick={logout}>Logout</button>}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
