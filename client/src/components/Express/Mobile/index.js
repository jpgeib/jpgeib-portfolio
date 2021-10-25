import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import ExpressLogo from "../../../assets/images/expressjs.png";

class Mobile extends Component {
    render() {

        const { icon, header } = this.props.express;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Image style={icon} src={ExpressLogo} size="small" />
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header style={header} as="h2">Express.js</Header>
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