import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import GnormMusic from "../../../assets/screenshots/gnorm-music.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Image id="gnorm-image-tablet" src={GnormMusic} size="big" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Grid id="gnorm-container-tablet">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="gnorm-header-tablet" as="h2">Gnorm Music LLC Company Site</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-tablet" as="h3">Github: <a id="gnorm-github-tablet" href="https://github.com/jpgeib/gnorm-music-company-site" target=":blank">https://github.com/jpgeib/gnorm-music-company-site</a></Header>
                                    <Header id="heroku-header-tablet" as="h3">Heroku: <a id="gnorm-heroku-tablet" href="https://gnorm-music.herokuapp.com/" target=":blank">https://gnorm-music.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-tablet">A new version of local CT musician Gnorm's company website, rebuilt with the React.js library.</List.Item>
                                        <List.Item className="project-list-item-tablet">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-tablet">Technologies used: React.js, Semantic UI React Framework, CSS, Express.js, Adobe Photoshop</List.Item>
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