import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Jquery from "../../../assets/images/jquery-logo.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="jquery-logo-mobile" src={Jquery} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="jquery-header-mobile" as="h2">jQuery</Header>
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