import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="css-logo-computer" src={CSS} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="css-header-computer" as="h2">CSS</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;