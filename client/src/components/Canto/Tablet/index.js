import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import Canto from "../../../assets/images/canto-logo-orange.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Column width={8}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image id="canto-logo-tablet" src={Canto} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header id="canto-header-tablet" as="h2">Canto</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Tablet;