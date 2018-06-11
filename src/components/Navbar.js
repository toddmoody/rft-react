import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import Logo from "../assets/RFT-trans.png"
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import bars from '@fortawesome/fontawesome-free-solid/faBars';
// import close from '@fortawesome/fontawesome-free-solid/faTimesCircle';

import '../css/Navbar.scss';

class Mobnav extends Component {
    render() {
        return (
            <div className="mob-nav">
                <ul>
                    <li><NavLink class="mob-link" exact to="/">Home</NavLink></li>
                    <li><NavLink class="mob-link" to="/services">Services</NavLink></li>
                    <li><NavLink class="mob-link" to="/projects">Projects</NavLink></li>
                    <li><NavLink class="mob-link" to="/contact">Contact</NavLink></li>
                </ul>
          </div>
          );
      }
}

class Navbar extends React.Component {
    constructor() {
      super();
      this.state = {
        MobnavVisible: false
      }
    }

    render() {
        return (
          <div>
            <div className="nav-container" onClick={() => this.onClick()}>
                <nav>
                <NavLink id="home" exact to="/"><img src={Logo} alt="RFT (2016) Engineering Ltd"></img></NavLink>
                    <FontAwesomeIcon id="hamburger" icon={bars}/>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
            {
              this.state.MobnavVisible
                ? <Mobnav />
                : null
            }
          </div>
        )
      }

    onClick() {
        this.setState(prevState => ({ MobnavVisible: !prevState.MobnavVisible }));
      }
    };

export default Navbar;
