import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="javascript-logo-mobile" src={JavaScript} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="javascript-header-mobile" as="h2">JavaScript</Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
};

export default Mobile;