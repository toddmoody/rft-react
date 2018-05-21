import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Material from "./Material"

class Contact extends Component {

    render() {
        return (
            <div>
                <header className="child-wrapper">
                    <Navbar />
                    <Fade>
                      <div className="page-title">
                          <span>Get in touch today</span>
                          <h2>Contact us</h2>
                      </div>
                    </Fade>
                </header>
                  <Material />
                <Footer />
            </div>
        );
    }
}

export default Contact;
