import React, { Component } from "react";
import SkillSectionMobile from "./SkillSectionMobile";
import SkillSectionTablet from "./SkillSectionTablet";
import SkillSectionComputer from "./SkillSectionComputer";

class SkillSection extends Component {
    render() {

        const { width } = this.props;
        const { computer, tablet, mobile } = this.props.skills;

        return (
            <>
                {width <= 426 && <SkillSectionMobile mobile={mobile} />}
                {(width >= 427 && width <= 1023) && <SkillSectionTablet tablet={tablet} />}
                {width >= 1024 && <SkillSectionComputer computer={computer} />}            
            </>
        );
    }
}

export default SkillSection;