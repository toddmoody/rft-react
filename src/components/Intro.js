import React, { Component } from 'react';

import '../css/Intro.scss';

class Intro extends Component {
  render() {
    return (
    <section id="intro">
        <div className="wrapper">
            <div className="intro-wrapper">
                <p className="sub-title">What I do</p>
                <p className="statement">I'm passionate about Front-End Development as it's all about talking an idea and making it a highly intuitive reality — one line of code at a time! My journey into web development is a lot like how others have discovered their passion — anything but typical.</p> 
            </div>
            </div>
        <div className="wrapper">
            <div className="card-wrapper">
            </div>
        </div>
    </section>
    );
  }
}

export default Intro;
