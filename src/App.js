import React, { Component } from 'react';
import { Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/services" component={Services}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default App;
