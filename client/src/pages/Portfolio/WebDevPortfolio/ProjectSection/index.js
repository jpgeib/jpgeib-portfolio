import React, { Component } from "react";
import ProjectSectionMobile from "./ProjectSectionMobile";
import ProjectSectionTablet from "./ProjectSectionTablet";
import ProjectSectionComputer from "./ProjectSectionComputer";

class ProjectSection extends Component {
    render() {

        const { width } = this.props;
        const { computer, tablet, mobile } = this.props.project;

        return (
            <>
                {width <= 425 && <ProjectSectionMobile mobile={mobile} />}
                {(width >= 426 && width <= 1023) && <ProjectSectionTablet tablet={tablet} />}
                {width >= 1024 && <ProjectSectionComputer computer={computer} />}
            </>
        );
    }
};

export default ProjectSection;