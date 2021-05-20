import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../assets/images/james-profile.jpg";
import HomeBio from "../../components/HomeBio";
import ContactInfo from "../../components/ContactInfo";
import SocialLinks from "../../components/SocialLinks";


import "./style.css";

class Home extends Component {
    render() {
        
        const { bio } = this.props;
        
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
                                        <ContactInfo />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <SocialLinks />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <HomeBio bio={bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default Home;