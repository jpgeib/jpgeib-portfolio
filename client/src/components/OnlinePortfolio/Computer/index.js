import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={OnlinePortfolioImage} size="big" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid id="portfolio-container-computer">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="portfolio-header-computer" as="h2">Online Portfolio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="portfolio-github-computer" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="portfolio-heroku-computer" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React.js, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
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
