import React, { Component } from "react";
import { Grid, Header, Image, List, Icon } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {

        const { image, container, linkContainer, header, icon, listItem } = this.props.subSection;

        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image style={image} src={OnlinePortfolioImage} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid style={container}>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header style={header} as="h2">Online Portfolio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Grid style={linkContainer}>
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header as="h3">
                                                    <a style={icon} href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">
                                                        <Icon id="github" size="huge" name="github" />
                                                    </a>
                                                </Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header as="h3">
                                                    <a style={icon} href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">
                                                        <Image src={HerokuIcon} size="tiny" />
                                                    </a>
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
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
}

export default Mobile;