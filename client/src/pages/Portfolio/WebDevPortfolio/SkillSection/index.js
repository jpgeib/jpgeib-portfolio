import React, { Component } from "react";
import SkillSectionMobile from "../../../../components/SkillSectionMobile";
import SkillSectionTablet from "../../../../components/SkillSectionTablet";
import SkillSectionComputer from "../../../../components/SkillSectionComputer";
import SkillSectionLarge from "../../../../components/SkillSectionLarge";
import SkillSectionWide from "../../../../components/SkillSectionWide";

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