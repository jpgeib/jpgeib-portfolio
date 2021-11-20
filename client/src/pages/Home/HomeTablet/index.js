import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBio from "../../../components/HomeBio";
import ContactInfo from "../../../components/ContactInfo";
import SocialLinks from "../../../components/SocialLinks";

class HomeTablet extends Component {
    render() {
        
        const { bio, home } = this.props;
        const { page, container, header, profile } = this.props.home.general;
        
        return (
            <>
                <div style={page}>
                    <Grid container>
                        <Grid.Row>
                            <Header style={header} as="h1">James Geib - Full-Stack Web Developer</Header>
                        </Grid.Row>
                    </Grid>
                    <Grid container style={container}>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Image style={profile} src={ProfilePic} size="massive" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <ContactInfo contact={home.contact}  />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <SocialLinks social={home.social} />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <HomeBio text={bio} bio={home.bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default HomeTablet;