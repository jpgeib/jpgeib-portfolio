import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import StyleFolders from "../../../assets/screenshots/style-folder-structure.png";
import FixingResponsive from "../../../assets/screenshots/fixing-responsive-logic.png";

class BlogComputer extends Component {
    render() {

        const { page, headerContainer, header, entry, container } = this.props.computer;

        return (
            <div style={page}>
                <Grid style={headerContainer}>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h1">Web Developer Blog</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header style={header} as="h3">This is where I post updates on what I'm currently working on, what I'm learning, or interesting discoveries I've found.</Header>
                        </Grid.Column>
                    </Grid.Row>   
                </Grid>
                <Grid style={container}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Image size="big" src={FixingResponsive} />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">11/20/21 - 5:10 PM</Header>
                            <Header style={entry} as="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad possimus sequi maxime placeat, suscipit delectus maiores nemo, optio minus ullam quae sunt. Adipisci sapiente possimus porro explicabo neque voluptatum placeat?</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={6}>
                            <Image size="medium" src={StyleFolders} />
                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={8}>
                            <Header style={entry} as="h2">11/16/21 - 6:53 PM</Header>
                            <Header style={entry} as="h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad possimus sequi maxime placeat, suscipit delectus maiores nemo, optio minus ullam quae sunt. Adipisci sapiente possimus porro explicabo neque voluptatum placeat?</Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
};

export default BlogComputer;