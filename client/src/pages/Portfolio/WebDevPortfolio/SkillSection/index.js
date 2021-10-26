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
                {width <= 414 && <SkillSectionMobile mobile={mobile} />}
                {(width >= 415 && width <= 799) && <SkillSectionTablet tablet={tablet} />}
                {width >= 800 && <SkillSectionComputer computer={computer} />}            
            </>
        );
    }
}

export default SkillSection;