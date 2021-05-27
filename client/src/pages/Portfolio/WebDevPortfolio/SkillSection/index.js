import React, { Component } from "react";
import SkillSectionMobile from "./SkillSectionMobile";
import SkillSectionTablet from "./SkillSectionTablet";
import SkillSectionComputer from "./SkillSectionComputer";

import "./style.css";

class SkillSection extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {

        const { windowWidth } = this.state;

        return (
            <>
                {windowWidth <= 414 && <SkillSectionMobile />}
                {(windowWidth >= 415 && windowWidth <= 799) && <SkillSectionTablet />}
                {windowWidth >= 800 && <SkillSectionComputer />}            
            </>
        );
    }
}

export default SkillSection;