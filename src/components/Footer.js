import React, { Component } from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/fontawesome-free-brands'
import { Link } from "react-router-dom";

import '../css/Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div className="wrapper">
                    <div className="footer-wrapper">
                        <div className="flex-col-1">
                            <p className="statement-dk">About RFT (2016) Engineering</p>
                            <p>Established in 2016, Right First Engineering (RFT) provides a holistic range of enginerring services to both the residential and commercial markets.</p>
                            <p><Link to="/services">More on services</Link> | <Link to="/contact">Contact us</Link></p>    
                        </div>
                        <div className="flex-col-2">
                            <p className="statement-dk">Links</p>
                            <ul>
                                <li><Link className="footer-links" to="/services">About & Services</Link></li>
                                <li><Link className="footer-links" to="/projects">Projects</Link></li>
                                <li><Link className="footer-links" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="flex-col-3">
                        <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} />
                            <p>© RFT (2016) Engineering LTD  2018</p>
                            <p>Website hand coded by <a href="http://www.moodsdigital.co.nz" target="blank">Moods Digital</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;