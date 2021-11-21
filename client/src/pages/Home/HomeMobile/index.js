import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBioMobile from "../../../components/HomeBio/Mobile";
import ContactInfoMobile from "../../../components/ContactInfo/Mobile";
import SocialLinksMobile from "../../../components/SocialLinks/Mobile";

class HomeMobile extends Component {
    render() {

        const { text } = this.props;
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
                                <SocialLinksMobile social={social} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <HomeBioMobile text={text} bio={bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default HomeMobile;