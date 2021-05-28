import React, { Component } from "react";
import ProjectSectionMobile from "./ProjectSectionMobile";
import ProjectSectionTablet from "./ProjectSectionTablet";
import ProjectSectionComputer from "./ProjectSectionComputer";

class ProjectSection extends Component {
    render() {
        return (
            <>
                <ProjectSectionMobile />
                <ProjectSectionTablet />
                <ProjectSectionComputer />
            </>
        );
    }
};

export default ProjectSection;