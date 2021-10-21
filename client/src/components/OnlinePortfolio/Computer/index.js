import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";

class Computer extends Component {
    render() {

        const { linkHeader, listItem, container, header, link } = this.props.subSection;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={OnlinePortfolioImage} size="big" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid style={container}>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={header} as="h2">Online Portfolio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header style={linkHeader} as="h3">Github: <a style={link} href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                    <Header style={linkHeader} as="h3">Heroku: <a style={link} href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item style={listItem}>An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item style={listItem}>Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item style={listItem}>Technologies used: React.js, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
};

export default Computer;
