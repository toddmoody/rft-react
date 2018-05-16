import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Material from "./pages/Material"

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/contact" component={Contact}/>ˇ
              <Route exact path="/material" component={Material}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default App;
