import React, { Component } from "react";

import '../../../css/ProjectCard.scss';

class ProjectCardA extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project-img project-a">
        </div>
        <div class="project-dets">
          <span className="tag">Structural Steel</span>
          <h3>Commercial structural steel canopy</h3>
          <p>⇢</p>
        </div>
      </div>
    );
  }
}

export default ProjectCardA;

