import React, { useEffect, useRef, useState } from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';

const Signup = () => {

  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Signup form data:", formData);
  };

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Full Name</label>
          <input
            ref={inputRef}
            type="text"
            id="name"
            name="fullname"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Mobile No.</label>
          <input
            type="number"
            id="mobile"
            name="mobile no"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="for-signup">
          <hr className="hr-line" />
          <h5 className="login-or-text"> OR</h5>
          <hr className="hr-line" />
        </div>

        <div className="mt-3 mb-5 d-grid">
          <button className="custom-btn">
            <span className="text-muted fs-6">Already have an account? </span>
            <Link to="/login" className="signup-text">Login</Link>
          </button>
        </div>


      </form>
    </div>
  );
};

export default Signup;
