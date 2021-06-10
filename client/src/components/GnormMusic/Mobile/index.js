import React, { Component } from "react";
import { Grid, Header, Image, List, Icon } from "semantic-ui-react";
import GnormMusic from "../../../assets/screenshots/gnorm-music.png";
import HerokuIcon from "../../../assets/images/heroku-icon.png";

class Mobile extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="gnorm-image-mobile" src={GnormMusic} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="gnorm-container-mobile">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="gnorm-header-mobile" as="h2">Gnorm Music LLC Company Site</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Grid id="gnorm-links-container-mobile">
                                        <Grid.Row>
                                            <Grid.Column width={8}>
                                                <Header id="github-header-mobile" as="h3"><a id="gnorm-github-mobile" href="https://github.com/jpgeib/gnorm-music-company-site" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                            </Grid.Column>
                                            <Grid.Column width={8}>
                                                <Header id="heroku-header-mobile" as="h3"><a id="gnorm-heroku-mobile" href="https://gnorm-music.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-mobile">A new version of local CT musician Gnorm's company website, rebuilt with the React.js library.</List.Item>
                                        <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-mobile">Technologies used: React.js, Semantic UI React Framework, CSS, Express.js, Adobe Photoshop</List.Item>
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

export default Mobile;