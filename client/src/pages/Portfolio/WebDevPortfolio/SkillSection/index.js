import React, { Component } from "react";
import SkillSectionMobile from "./SkillSectionMobile";
import SkillSectionTablet from "./SkillSectionTablet";
import SkillSectionComputer from "./SkillSectionComputer";
import SkillSectionLarge from "./SkillSectionLarge";
import SkillSectionWide from "./SkillSectionWide";

import "./style.css";

class SkillSection extends Component {
    render() {
        return (
            <>
                <SkillSectionMobile />
                <SkillSectionTablet />
                <SkillSectionComputer />
                <SkillSectionLarge />
                <SkillSectionWide />            
            </>
        );
    }
}

export default SkillSection;