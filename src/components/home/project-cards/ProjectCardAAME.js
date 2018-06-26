import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import aame1 from "../../../assets/aame-lg-1.jpg";
import aame2 from "../../../assets/aame-lg-2.jpg";

import '../../../css/ProjectCard.scss';

const images = [
  aame1,
  aame2,
];

class ProjectCardAAME extends Component {
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
          <div className="project-img project-aame"></div>
          <div className="project-dets">
            <span className="tag">Steel Fabrication</span>
            <h3>APAC Auckland - modifying existing stairway</h3>
            <p>⇢</p>
          </div>
        </div>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageCaption={"APAC Auckland - modifying existing stairway (mild-steel)."}
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

export default ProjectCardAAME;
