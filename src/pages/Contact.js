import React, { Component } from 'react';
import Fade from "react-reveal/Fade";

import MapContainer from '../components/MapContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../css/Child.scss"

class Contact extends Component {
    render() {
        return (
            <section id="child-contact">
                <header className="child-contact child-wrapper">
                    <Navbar />
                    <Fade>
                      <div className="page-title">
                          <span>Get in touch today</span>
                          <h2>Contact us</h2>
                      </div>
                    </Fade>
                </header>
                    <div className="contact-container">
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <p className="spacer-btm">07 575 8040</p>
                            <h3>Visit us</h3>
                            <p>RFT Engineering (2016) Ltd</p>
                            <p>19 Reynolds Place</p>
                            <p>Papamoa 3118</p>
                            <a href="https://goo.gl/maps/kL1HdpSszQF2" target="blank">Get directions</a>
                        </div>
                        <form className="form-container" action="https://formspree.io/todd@moodsdigital.co.nz" method="POST">
                            <div className="form-row-one">
                                <input className="form-name f-control" type="text" id="contact-name" name="contact-name" placeholder="Name" required />
                                <input className="form-email f-control" type="email" id="contact-email" name="contact-email" placeholder="Email Address" required />
                            </div>
                            <div className="form-row-two">
                                <input className="form-phone f-control" type="text" id="contact-phone" name="contact-phone" placeholder="Phone" />
                                <input className="form-subject f-control" type="text" id="contact-subject" name="contact-subject" placeholder="Subject" required />
                            </div>
                            <div className="form-row-three">
                                <textarea className="form-msg f-control" id="contact-message" name="contact-message" rows="1" placeholder="Your Message" required />
                            </div>
                                <button className="submit-btn" type="submit" id="contact-submit" name="contact-submit" value="submit">Send Message</button>
                        </form>
                    </div>
                    <Fade>
                      <div className="contact-map">
                            <MapContainer />
                    </div>
                    </Fade>
                <Footer />
            </section>
        );
    }
}

export default Contact;
