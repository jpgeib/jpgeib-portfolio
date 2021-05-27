import React, { Component } from "react";
import SkillSectionMobile from "./SkillSectionMobile";
import SkillSectionTablet from "./SkillSectionTablet";
import SkillSectionComputer from "./SkillSectionComputer";

import "./style.css";

class SkillSection extends Component {
    render() {
        return (
            <>
                <SkillSectionMobile />
                <SkillSectionTablet />
                <SkillSectionComputer />            
            </>
        );
    }
}

export default SkillSection;