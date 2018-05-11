import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Services extends Component {
  render() {
    return (
        <div>
          <header className="child-wrapper">
            <Navbar /> 
            <div className="page-title">
                <span>~ No job is too big or too small ~</span>
                <h2>Engineering Services</h2>
            </div>
          </header>
          <Footer />
        </div>
    );
  }
}

export default Services;
