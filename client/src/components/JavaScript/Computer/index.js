import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="javascript-logo-computer" src={JavaScript} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="javascript-header-computer" as="h2">JavaScript</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;