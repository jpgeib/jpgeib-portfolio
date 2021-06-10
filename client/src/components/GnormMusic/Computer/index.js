import React, { Component } from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import GnormMusic from "../../../assets/screenshots/gnorm-music.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={GnormMusic} size="big" />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Grid id="gnorm-container-computer">
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <Header id="gnorm-header-computer" as="h2">Gnorm Music LLC Company Site</Header>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="gnorm-github-computer" href="https://github.com/jpgeib/gnorm-music-company-site" target=":blank">https://github.com/jpgeib/gnorm-music-company-site</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="gnorm-heroku-computer" href="https://gnorm-music.herokuapp.com/" target=":blank">https://gnorm-music.herokuapp.com/</a></Header>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">A new version of local CT musician Gnorm's company website, rebuilt with the React.js library.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React.js, Semantic UI React Framework, CSS, Express.js, Adobe Photoshop</List.Item>
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