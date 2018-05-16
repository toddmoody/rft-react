import React, { Component, Fragment } from "react";

import Header from "../components/Material/Header";
import Footer from "../components/Material/Footer";
import Exercises from "../components/Material/Exercises"

class Material extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Exercises />
                <Footer />
            </Fragment>
        );
    }
}

export default Material;
