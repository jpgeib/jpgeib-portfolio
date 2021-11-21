import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBioTablet from "../../../components/HomeBio/Tablet";
import ContactInfoTablet from "../../../components/ContactInfo/Tablet";
import SocialLinks from "../../../components/SocialLinks";

class HomeTablet extends Component {
    render() {

        const { text } = this.props;
        const { general, social, bio, contact } = this.props.home.general;

        return (
            <>
                <div style={general.page}>
                    <Grid container>
                        <Grid.Row>
                            <Header style={general.header} as="h1">James Geib - Full-Stack Web Developer</Header>
                        </Grid.Row>
                    </Grid>
                    <Grid container style={general.container}>
                        <Grid.Row>
                            <Grid.Column width={5}>
                                <Image style={general.profile} src={ProfilePic} size="massive" />
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <ContactInfoTablet contact={contact} />
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <SocialLinks social={social} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <HomeBioTablet text={text} bio={bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default HomeTablet;