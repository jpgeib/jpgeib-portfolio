import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image src={OnlinePortfolioImage} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="portfolio-container-tablet">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="portfolio-header-tablet" as="h2">Online Portfolio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-tablet" as="h3">Github: <a id="portfolio-github-tablet" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                    <Header id="heroku-header-tablet" as="h3">Heroku: <a id="portfolio-heroku-tablet" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-tablet">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-tablet">Technologies used: React.js, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
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

export default Tablet;