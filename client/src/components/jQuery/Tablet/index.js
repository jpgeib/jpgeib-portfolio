import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import JQuery from "../../../assets/images/jquery-logo.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="jquery-logo-tablet" src={JQuery} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="jquery-header-tablet" as="h2">jQuery</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;