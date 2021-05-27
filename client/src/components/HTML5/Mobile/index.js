import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image id="html5-logo-mobile" src={HTML5} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="html5-header-mobile" as="h2">HTML5</Header>
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