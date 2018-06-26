import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import opbg1 from "../../../assets/opbg-lg-1.jpg";
import opbg2 from "../../../assets/opbg-lg-2.jpg";
import opbg3 from "../../../assets/opbg-lg-3.jpg";
import opbg4 from "../../../assets/opbg-lg-4.jpg";

import '../../../css/ProjectCard.scss';

const images = [
  opbg1,
  opbg2,
  opbg3,
  opbg4,
];

class ProjectCardOPBG extends Component {
  constructor(props) {
  super(props);

  this.state = {
    photoIndex: 0,
    isOpen: false,
  };
}

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <Fade big>
        <div className="projects" onClick={() => this.setState({ isOpen: true})}>
          <div className="project-img project-opbg"></div>
          <div className="project-dets">
            <span className="tag">General Engineering</span><span className="tag-add">Steel Fabrication</span>
            <h3>Ohope Primary - bifold gate/entry screen.</h3>
            <p>⇢</p>
          </div>
        </div>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageCaption={"Ohope Primary - bifold gate/entry screen."}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
        </div>
      </Fade>
    );
  }
}

export default ProjectCardOPBG;
