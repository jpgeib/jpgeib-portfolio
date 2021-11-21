import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBio from "../../../components/HomeBio";
import ContactInfoMobile from "../../../components/ContactInfo/Mobile";
import SocialLinks from "../../../components/SocialLinks";

class HomeMobile extends Component {
    render() {

        const { general, contact, social, bio } = this.props.home.mobile;

        return (
            <>
                <div style={general.page}>
                    <Grid container>
                        <Grid.Row>
                            <Header style={general.header} as="h1">James Geib - Full-Stack Web Developer</Header>
                        </Grid.Row>
                    </Grid>
                    <Grid container style={general.container}>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <Image style={general.profile} src={ProfilePic} size="medium" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <ContactInfoMobile contact={contact} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <SocialLinks social={social} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <HomeBio text={bio} bio={bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default HomeMobile;