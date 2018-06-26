import React, { Component } from 'react';

import Fade from "react-reveal/Fade";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import '../../../css/ProjectCard.scss';

import ljsh1 from "../../../assets/ljsh-lg-1.jpg";
import ljsh2 from "../../../assets/ljsh-lg-2.jpg";
import ljsh3 from "../../../assets/ljsh-lg-3.jpg";

const images = [
  ljsh1,
  ljsh2,
  ljsh3,
];

class ProjectCardLJSH extends Component {
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
            <div className="project-img project-ljsh"></div>
            <div className="project-dets">
              <span className="tag">Alloy, Galv & Stainless</span><span className="tag-add">Steel Fabrication</span>
              <h3>Lynmore Junction - stair handrails & powder coat.</h3>
              <p>⇢</p>
            </div>
          </div>
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageCaption={"Lynmore Junction - stair handrails (incl. powder coat)."}
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

export default ProjectCardLJSH;
