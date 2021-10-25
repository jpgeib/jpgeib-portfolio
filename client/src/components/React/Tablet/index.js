import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ReactLogo from "../../../assets/images/classic-react-logo.png";

class Tablet extends Component {
    render() {

        const { icon, header } = this.props.react;

        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={ReactLogo} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">React.js</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;