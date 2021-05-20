import React, { Component } from "react";
import ProjectSectionMobile from "./ProjectSectionMobile";
import ProjectSectionTablet from "./ProjectSectionTablet";
import ProjectSectionComputer from "./ProjectSectionComputer";
import ProjectSectionLarge from "./ProjectSectionLarge";
import ProjectSectionWide from "./ProjectSectionWide";

import "./style.css";

class ProjectSection extends Component {
    render() {
        return (
            <>
                <ProjectSectionMobile />
                <ProjectSectionTablet />
                <ProjectSectionComputer />
                <ProjectSectionLarge />
                <ProjectSectionWide />
            </>
        );
    }
};

export default ProjectSection;