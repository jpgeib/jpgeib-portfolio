import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class Computer extends Component {
    render() {

        const { icon, header } = this.props.html5;

        return (
            <>
                <Grid.Column width={4}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Image style={icon} src={HTML5} size="small" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Header style={header} as="h2">HTML5</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
            </>
        );
    }
};

export default Computer;