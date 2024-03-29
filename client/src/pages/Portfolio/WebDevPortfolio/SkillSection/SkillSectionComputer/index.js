import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Computer";
import CSS from "../../../../../components/CSS/Computer";
import JavaScript from "../../../../../components/JavaScript/Computer";
import Jquery from "../../../../../components/Jquery/Computer";
import SQL from "../../../../../components/SQL/Computer";
import MongoDB from "../../../../../components/MongoDB/Computer";
import ReactLogo from "../../../../../components/React/Computer";
import ReduxLogo from "../../../../../components/Redux/Computer";
import ExpressLogo from "../../../../../components/Express/Computer";
import Canto from "../../../../../components/Canto/Computer";

class SkillSectionComputer extends Component {
    render() {
        
        const { general } = this.props.computer;
        const { html5, css3, javascript, jQuery, sql, mongodb, react, redux, express, canto } = this.props.computer.entries;
        
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
                        <JavaScript javascript={javascript} />
                        <Jquery jQuery={jQuery} />
                    </Grid.Row>
                    <Grid.Row>
                        <SQL sql={sql} />
                        <MongoDB mongodb={mongodb} />
                        <ReactLogo react={react} />
                        <ReduxLogo redux={redux} />
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4}></Grid.Column>
                        <ExpressLogo express={express} />
                        <Canto canto={canto} />
                        <Grid.Column width={4}></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default SkillSectionComputer;