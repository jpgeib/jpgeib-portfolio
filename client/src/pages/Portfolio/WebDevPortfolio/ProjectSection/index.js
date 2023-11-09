import React, { Component } from "react";
import ProjectSectionMobile from "./ProjectSectionMobile";
import ProjectSectionTablet from "./ProjectSectionTablet";
import ProjectSectionComputer from "./ProjectSectionComputer";

import "./style.css";

class ProjectSection extends Component {
    render() {

        const { width } = this.props;
        const { computer, tablet, mobile } = this.props.project;

        return (
            <>
                {width <= 426 && <ProjectSectionMobile mobile={mobile} />}
                {(width >= 427 && width <= 1023) && <ProjectSectionTablet tablet={tablet} />}
                {width >= 1024 && <ProjectSectionComputer computer={computer} />}
            </>
        );
    }
};

export default ProjectSection;