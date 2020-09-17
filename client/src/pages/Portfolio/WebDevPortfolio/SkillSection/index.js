import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import HTML5 from "../../../../assets/images/HTML-icon.png";
import CSS from "../../../../assets/images/CSS-icon.png";
import JavaScript from "../../../../assets/images/Javascript-icon.png";

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
                <Grid id="skills-container">
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={HTML5} size="small" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header id="html5-header" as="h2">HTML5</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={CSS} size="small" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header id="css-header" as="h2">CSS</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image src={JavaScript} size="small" />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header id="javascript-header" as="h2">JavaScript</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSection;