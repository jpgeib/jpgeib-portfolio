import React, { Component } from "react";
import { Grid, Image, Header, Icon } from "semantic-ui-react";
import ProfilePic from "../../assets/images/james-profile.jpg";
import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                <div id="home-page">
                    <Grid container>
                        <Grid.Row>
                            <Header id="home-header" as="h1">James Geib - Full-Stack Web Developer</Header>
                        </Grid.Row>
                    </Grid>
                    <Grid container id="home-container">
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Image id="profile-pic" src={ProfilePic} size="massive" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <div id="social-container">
                                            <Header id="social-header" as="h2">Social Links:</Header>
                                            <a href="https://github.com/jpgeib" target=":blank"><Icon id="github" size="huge" name="github" /></a>
                                            <a href="https://www.linkedin.com/in/james-geib-0b6493160" target=":blank"><Icon id="linkedin" size="huge" name="linkedin" /></a>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <div id="paragraphs">
                                    <div id="content1">
                                        <p>
                                            I am a graduate of Fordham University with two Bachelor's
                                            degrees in Communications: Digital Technology and Emerging Media,
                                    and Film/Television Studies. Currently living in Oakland, CA.</p>
                                    </div>

                                    <div id="content2">
                                        <p>
                                            I am proficient in multiple Adobe Creative Cloud applications,
                                            have many years of experience working in Microsoft Office, and a basic knowledge of
                                    HTML5, CSS, Javascript, and SQL programming languages.</p>
                                    </div>

                                    <div id="content3">
                                        <p>
                                            I am ideally looking for a position that will allow me
                                            to utilize my pre-exisiting skills in Adobe, and improve
                                            upon them as I use them throughout the job. Alternatively, I am
                                            also looking for a web development or data engineering position to
                                            utilize my current set of coding languages. If you would like to see
                                    examples of my work, please consult my portfolio.</p>
                                    </div>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default Home;