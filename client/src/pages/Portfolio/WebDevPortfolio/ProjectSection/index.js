import React, { Component } from "react";
import ProjectSectionMobile from "./ProjectSectionMobile";
import ProjectSectionTablet from "./ProjectSectionTablet";
import ProjectSectionComputer from "./ProjectSectionComputer";

class ProjectSection extends Component {

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
        const { computer, tablet, mobile } = this.props.project;

        return (
            <>
                {windowWidth <= 414 && <ProjectSectionMobile mobile={mobile} />}
                {(windowWidth >= 415 && windowWidth <= 799) && <ProjectSectionTablet tablet={tablet} />}
                {windowWidth >= 800 && <ProjectSectionComputer computer={computer} />}
            </>
        );
    }
};

export default ProjectSection;