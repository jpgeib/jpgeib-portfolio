import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";

import "./style.css";

class SkillSection extends Component {
    render() {
        return (
            <div id="skills-page">
                <Grid id="skills-headers-container">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-header" as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header id="skills-subheader" as="h3">I am proficient in the following technologies:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>

                    </Grid.Row>
                    <Grid.Row>
                        
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSection;