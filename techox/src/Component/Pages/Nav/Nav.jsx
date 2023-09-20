import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <>
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="navbar-logo">
          <h2>Techox</h2>
          
        </div>
      </Link>
      <div className="menu-button">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar-items">
        <Link to="/" className="docs-creator">
          Home
        </Link>
        <Link to="/aboutus" className="docs-creator">
          AboutUs
        </Link>
      
        <Link to="/contactus" className="docs-creator">
          ContactUs
        </Link>
          <Link to="/login" className="login-signup-btn docs-creator">
        <div className="d-flex">
            Login/SignUp
        </div>
          </Link>
      </div>
      <div className="toast-container-div">
        <div className="Toastify"></div>
      </div>
    </div>
    
    </>
  )
}

export default Nav