import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"; 

import Navbar from "../../components/Navbar"

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
//import logo from '../assets/RFT-trans.png'

import '../../css/Header.scss';

class Header extends Component {
  render() {
    return (
        <header className="header-wrapper">
            <Navbar />
            <div className="content-block">
                <div>
                    <h1>RFT ENGINEERING:</h1>
                    <h1>EFFICIENT, GUARANTEED, AND</h1>
                    <h1>PROFESSIONAL SERVICE.</h1>
                </div>
                <div className="btn-wrapper">
                    <a href="#" className="hero-btn">More about us</a>
                </div>
            </div>  
            <div className="scroll-down">
                <span>What we do</span>
                <FontAwesomeIcon className="bounce arrow" size="lg" icon={FaChevronDown}/>
            </div>
        </header>
    );
  }
}

export default Header;
