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
                                        <div id="contact-container">
                                            <Header id="contact-header" as="h2">Contact Info:</Header>
                                            <Header id="phone" as="h3"><Icon size="huge" name="phone" />(203)-736-7540</Header>
                                            <Header id="email" as="h3"><Icon size="huge" name="mail" />jpgeib2@gmail.com</Header>
                                        </div>
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
                                            I am a graduate of UC Berkeley Extension's Coding Boot Camp with a 
                                            certificate in Full-Stack Web Development, and Fordham University 
                                            with two Bachelor's degrees in Communications: Digital Technology and 
                                            Emerging Media, and Film/Television Studies. Currently living in Milford, 
                                            CT; willing to relocate if necessary.
                                        </p>
                                    </div>

                                    <div id="content2">
                                        <p>
                                            I am proficient in HTML5, CSS/CSS Frameworks, Javascript/jQuery, and SQL coding languages, and have
                                            experience working in MERN stack development. I specialize mostly in front-end development and design,
                                            enhanced by knowledge in Adobe Creative Cloud applications, but I can also work in back-end development
                                            when needed.
                                        </p>
                                    </div>

                                    <div id="content3">
                                        <p>
                                            I am ideally looking for a position that will allow me
                                            to utilize my ability to create an eye-catching, yet simple 
                                            user-friendly interface for websites, apps, and other digital 
                                            media, in order to enhance the user experience with a visually 
                                            optimized client-side service. Having been on the consumer side of 
                                            various software, I understand the frustration users may have when navigating
                                            through different pages/menus just to find one small piece of information. My mission
                                            as a front-end developer is to create an intuitive, easy-to-follow format that minimizes
                                            any confusion or difficulty in using.
                                        </p>
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