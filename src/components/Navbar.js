import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

import Logo from "../assets/RFT-trans.png" 
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import bars from '@fortawesome/fontawesome-free-solid/faBars';
import close from '@fortawesome/fontawesome-free-solid/faTimesCircle';

import '../css/Navbar.scss';

class Child extends Component {
    render() {
        return (
            <div className="mob-nav">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About & Contact</li>
            </ul>
          </div>
          );
      } 
}  

class Navbar extends React.Component {
    constructor() {
      super();
      this.state = {
        childVisible: false
      }
    }

    render() {
        return (
          <div>
            <div className="nav-container" onClick={() => this.onClick()}>
                    <nav> 
                    <img src={Logo}></img>
                    <FontAwesomeIcon id="hamburger" icon={bars}/>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/about-contact">About & Contact</NavLink></li>
                    </ul>
                </nav> 
            </div>
            {
              this.state.childVisible
                ? <Child />
                : null
            }
          </div>
        )
      }


    /*render() {
        return (
            <div className="nav-container">
                <nav> 
                    <img src={Logo}></img>
                    <FontAwesomeIcon id="hamburger" size="md" icon={bars}/>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/projects">Projects</NavLink></li>
                        <li><NavLink to="/about-contact">About & Contact</NavLink></li>
                    </ul>
                </nav> 
            </div>
        );
    }
*/

    onClick() {
        this.setState(prevState => ({ childVisible: !prevState.childVisible }));
      }
    };

export default Navbar;
