import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./pages/Home"
import Services from "./pages/Services"
//import Projects from "./pages/Projects"
//import About from "./pages/About"

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route exact path="/services" component={Services}/>
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default App;
