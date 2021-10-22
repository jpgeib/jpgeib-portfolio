import React, { Component } from "react";
import SkillSectionMobile from "./SkillSectionMobile";
import SkillSectionTablet from "./SkillSectionTablet";
import SkillSectionComputer from "./SkillSectionComputer";

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
        const { computer, tablet, mobile } = this.props.skills;

        return (
            <>
                {windowWidth <= 414 && <SkillSectionMobile mobile={mobile} />}
                {(windowWidth >= 415 && windowWidth <= 799) && <SkillSectionTablet tablet={tablet} />}
                {windowWidth >= 800 && <SkillSectionComputer computer={computer} />}            
            </>
        );
    }
}

export default SkillSection;