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
                {width <= 414 && <ProjectSectionMobile mobile={mobile} />}
                {(width >= 415 && width <= 799) && <ProjectSectionTablet tablet={tablet} />}
                {width >= 800 && <ProjectSectionComputer computer={computer} />}
            </>
        );
    }
};

export default ProjectSection;