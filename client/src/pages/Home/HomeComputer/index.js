import React, { Component } from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/james-profile.jpg";
import HomeBioComputer from "../../../components/HomeBio/Computer";
import ContactInfoComputer from "../../../components/ContactInfo/Computer";
import SocialLinks from "../../../components/SocialLinks";

class HomeComputer extends Component {
    render() {
        
        const { text } = this.props;
        const { general, bio, social, contact } = this.props.home.computer;
        
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
                            <Grid.Column width={4}>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Image style={general.profile} src={ProfilePic} size="massive" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <ContactInfoComputer contact={contact}  />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <SocialLinks social={social} />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <HomeBioComputer text={text} bio={bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
        );
    }
}

export default HomeComputer;