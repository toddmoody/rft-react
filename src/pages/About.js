import React, { Component } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import Fade from "react-reveal/Fade";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import FaEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

import '../css/About.scss';
import "../css/Child.scss";
import "../css/Header.scss";
import GlobalCTA from '../components/GlobalCTA';

class About extends Component {

    render() {
        return (
            <section id="child-about">
                <header className="child-about child-wrapper">
                    <Navbar />
                    <Fade>
                    <div className="page-title">
                        <span>Find out a little more</span>
                        <h2>About us</h2>
                    </div>
                    </Fade>
                </header>
                <div className="copy-wrapper wrapper">
                    <p>Established in 2016, Right First Engineering (RFT) provides a holistic range of engineering services to both the residential and commercial markets. We’re proud to be a 100% NZ owned and operated business based in Papamoa.</p>
                </div>
                <div className="profile-cards">
                    <Fade>
                        <aside>
                            <div>
                                <div className="profile-rich"></div>
                                <h1>Richard Easton</h1>
                                <h3>Director</h3>
                            </div>
                            <div className="profile-bio">
                                <p>Richard has 10-year’s experience in the Engineering industry. Initially, Richard was focused on the day-to-day operations of the workshop and they he moved into role covering estimating, quantity surveying, and project management.</p> 
                                <p>Richard is now putting that knowledge, experience and expertise into running RFT Engineering is and continues to enjoy the challenges of owning and operating a business.</p>
                            </div>
                            <ul classNmae="profile-social-links">
                                <li><a target="blank" href="https://www.facebook.com/RFTEngineering2016/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                <li><Link to="/contact"><FontAwesomeIcon icon={FaEnvelope} /></Link></li>
                            </ul>
                        </aside>
                    </Fade>
                    <Fade>
                    <aside>
                            <div>
                                <div className="profile-shelly"></div>
                                <h1>Shelly Easton</h1>
                                <h3>Administration & Accounts</h3>
                            </div>
                            <div className="profile-bio">
                                <p>Shelly manages the day-to-day business operations including all aspects of administration and accounts.</p> 
                                <p>In addition to Richard and Shelly, we have an experienced team at RFT Engineering working to supply builders and homeowners with a high level of customer service. </p>
                            </div>
                            <ul className="profile-social-links">
                                <li><a target="blank" href="https://www.facebook.com/RFTEngineering2016/"><FontAwesomeIcon icon={faFacebook}/></a></li>
                                <li><Link to="/contact"><FontAwesomeIcon icon={FaEnvelope} /></Link></li>
                            </ul>
                        </aside>
                    </Fade>
                </div>
                <GlobalCTA />
                <Footer />
            </section>
        );
    }
}

export default About;
