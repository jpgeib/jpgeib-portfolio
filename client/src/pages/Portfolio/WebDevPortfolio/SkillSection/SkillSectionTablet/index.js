import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Tablet";
import CSS from "../../../../../components/CSS/Tablet";
import JavaScript from "../../../../../components/JavaScript/Tablet";
import Jquery from "../../../../../components/Jquery/Tablet";
import SQL from "../../../../../components/SQL/Tablet";
import MongoDB from "../../../../../components/MongoDB/Tablet";
import ReactLogo from "../../../../../components/React/Tablet";
import ReduxLogo from "../../../../../components/Redux/Tablet";
import ExpressLogo from "../../../../../components/Express/Tablet";
import Canto from "../../../../../components/Canto/Tablet";

// import "./style.css";

class SkillSectionTablet extends Component {
    render() {

        const { general } =this.props.tablet;
        const { html5, css3, javascript, jQuery, sql, mongodb, react, redux, express, canto } = this.props.tablet.entries;

        return (
            <div style={general.page}>
                <Grid style={general.headerContainer}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={general.header} as="h1">Full-Stack Web Development Technical Skills</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header style={general.subheader} as="h3">I am proficient in the following technologies:</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid style={general.container}>
                    <Grid.Row>
                        <HTML5 html5={html5} />
                        <CSS css3={css3} />
                    </Grid.Row>
                    <Grid.Row>
                        <JavaScript javascript={javascript} />
                        <Jquery jQuery={jQuery} />
                    </Grid.Row>
                    <Grid.Row>
                        <SQL sql={sql} />
                        <MongoDB mongodb={mongodb} />
                    </Grid.Row>
                    <Grid.Row>
                        <ReactLogo react={react} />
                        <ReduxLogo redux={redux} />
                    </Grid.Row>
                    <Grid.Row>
                        <ExpressLogo express={express} />
                        <Canto canto={canto} />
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSectionTablet;