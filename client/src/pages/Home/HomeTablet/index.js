import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBio from "../../../components/HomeBio";
import ContactInfoTablet from "../../../components/ContactInfo/Tablet";
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
                            <Grid.Column width={5}>
                                <Image style={profile} src={ProfilePic} size="massive" />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <ContactInfoTablet contact={home.contact} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <SocialLinks social={home.social} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
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