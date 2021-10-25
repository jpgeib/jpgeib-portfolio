import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import HTML5 from "../../../../../components/HTML5/Mobile";
import CSS from "../../../../../components/CSS/Mobile";
import JavaScript from "../../../../../components/JavaScript/Mobile";
import Jquery from "../../../../../components/Jquery/Mobile";
import SQL from "../../../../../components/SQL/Mobile";
import MongoDB from "../../../../../components/MongoDB/Mobile";
import ReactLogo from "../../../../../components/React/Mobile";
import ReduxLogo from "../../../../../components/Redux/Mobile";
import ExpressLogo from "../../../../../components/Express/Mobile";
import Canto from "../../../../../components/Canto/Mobile";

// import "./style.css";

class SkillSectionMobile extends Component {
    render() {

        const { general } = this.props.mobile;
        const { html5, css3, javascript, jQuery, sql, mongodb, react, redux, express, canto } = this.props.mobile.entries;

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
                    <HTML5 html5={html5} />
                    <CSS css3={css3} />
                    <JavaScript javascript={javascript} />
                    <Jquery jQuery={jQuery} />
                    <SQL sql={sql} />
                    <MongoDB mongodb={mongodb} />
                    <ReactLogo react={react} />
                    <ReduxLogo redux={redux} />
                    <ExpressLogo express={express} />
                    <Canto canto={canto} />
                </Grid>
            </div>
        );
    }
}

export default SkillSectionMobile;