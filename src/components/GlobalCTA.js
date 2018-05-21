import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import '../css/GlobalCTA.scss';

class GlobalCTA extends Component {
    render() {
        return (
            <Fade right> 
                <div id="global-cta">
                    <div className="global-cta-wrapper">
                        <h3>Keen to chat about your project?</h3>
                        <Link to="/contact" className="hero-btn">Contact us</Link>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default GlobalCTA;