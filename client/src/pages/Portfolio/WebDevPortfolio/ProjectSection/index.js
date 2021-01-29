import React, { Component } from "react";
import ProjectSectionMobile from "../../../../components/ProjectSectionMobile";
import ProjectSectionTablet from "../../../../components/ProjectSectionTablet";
import ProjectSectionComputer from "../../../../components/ProjectSectionComputer";
import ProjectSectionLarge from "../../../../components/ProjectSectionLarge";
import ProjectSectionWide from "../../../../components/ProjectSectionWide";

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