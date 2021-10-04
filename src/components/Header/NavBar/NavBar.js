import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-container">
        <nav className="container navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          
          <div className="logo">
            <Link className="navbar-brand" to="/home"
              ><img className="w-75" src={logo} alt=""
            /></Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            <div className="btn bg-white text-warning shadow px-3 rounded-pill">
              Aplly Now
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};

export default NavBar;