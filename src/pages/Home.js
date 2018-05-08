import React, { Component } from "react";

import Header from "../components/home/Header"
import Intro from "../components/home/Intro"


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
        
            </div>
        );
    }
}

export default Home;