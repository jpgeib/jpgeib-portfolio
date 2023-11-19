import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react"
import ProfilePic from "../../assets/images/james-profile.jpg";
import HomeBioComputer from "../../components/HomeBio/Computer";
import ContactInfoComputer from "../../components/ContactInfo/Computer";
import SocialLinksComputer from "../../components/SocialLinks/Computer";

import "./style.css";

class Home extends Component {

    handleColumnNumber = (width) => {
        let columnNum;
        if (width <= 426) {
            columnNum = 4;
        } else if (width >= 427 && width <= 1023) {
            columnNum = 2;
        } else if (width >= 1024) {
            columnNum = 1;
        }
        return columnNum;
    }
    
    render() {
        
        const { text, home, width } = this.props;
        
        return (
            <>
                {/* {width <= 426 && <HomeMobile text={text} home={home} />}
                {(width >= 427 && width <= 1023) && <HomeTablet text={text} home={home} />}
                {width >= 1024 && <HomeComputer text={text} home={home} />} */}
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
                                        <Image id="home-profile" src={ProfilePic} size="massive" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <ContactInfoComputer contact={home.computer.contact}  />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <SocialLinksComputer social={home.computer.social} />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <HomeBioComputer text={text} bio={home.computer.bio} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>
            </>
        );
    }
}

export default Home;