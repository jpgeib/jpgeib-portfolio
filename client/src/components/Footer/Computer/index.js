import React from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import ReactLogoWhite from "../../../assets/images/React-Logo-White.png";
import SemanticLogoWhite from "../../../assets/images/semantic-ui-logo.png"

export default (props) => {

    const { footer, header, react, semantic } = props.computer;

    return (
        <Grid style={footer}>
            <Grid.Row>
                <Grid.Column>
                    <Header style={header} as="h1">Powered by:</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={1}>
                    <a href="https://reactjs.org/" target=":blank">
                        <Image style={react} size="tiny" src={ReactLogoWhite} />
                    </a>
                </Grid.Column>
                <Grid.Column width={1}>
                    <a href="https://react.semantic-ui.com/" target=":blank">
                        <Image style={semantic} size="tiny" src={SemanticLogoWhite} />
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};