import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

class Contact extends Component {
    
    render() {
        return (
            <div>
                <header className="child-wrapper">
                    <Navbar /> 
                    <div className="page-title">
                        <span>~ Get in touch today ~</span>
                        <h2>Contact us</h2>
                    </div>
                </header>

                <Footer />
            </div>
        );
    }
}

export default Contact;