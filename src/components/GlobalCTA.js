import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import '../css/GlobalCTA.scss';

class GlobalCTA extends Component {
    render() {
        return (
            <Fade> 
                <Link to="/contact" id="global-cta">
                    <div className="global-cta-wrapper">
                        <h3>Keen to chat about your project?</h3>
                        <p>⇢</p>
                    </div>
                </Link>
            </Fade>
        )
    }
}

export default GlobalCTA;