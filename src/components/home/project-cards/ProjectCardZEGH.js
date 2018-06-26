import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import zegh1 from "../../../assets/zegh-lg-1.jpg";
import zegh2 from "../../../assets/zegh-lg-2.jpg";

import '../../../css/ProjectCard.scss';

const images = [
  zegh1,
  zegh2,
];

class ProjectCardZEGH extends Component {
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
          <div className="project-img project-zegh"></div>
          <div className="project-dets">
            <span className="tag">Alloy, Galv & Stainless</span><span className="tag-add">Steel Fabrication</span>
            <h3>Z Energy - Mount office galvanized handrails.</h3>
            <p>⇢</p>
          </div>
        </div>
        <div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageCaption={"Z Energy - Mount office galvanized handrails."}
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

export default ProjectCardZEGH;
