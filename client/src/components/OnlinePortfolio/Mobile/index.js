import React, { Component } from "react";
import { Grid, Header, Image, List, Icon } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="portfolio-image-mobile" src={OnlinePortfolioImage} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="portfolio-container-mobile">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="portfolio-header-mobile" as="h2">Online Portfolio</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Grid id="portfolio-links-container-mobile">
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="portfolio-github-mobile" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="portfolio-heroku-mobile" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
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