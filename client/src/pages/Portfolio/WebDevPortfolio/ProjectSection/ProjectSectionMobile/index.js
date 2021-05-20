import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive, Icon } from "semantic-ui-react";
import AllChatV2 from "../../../../../assets/images/AllChatV2.png";
import AllChatV1 from "../../../../../assets/images/AllChatV1.png";
import OnlinePortfolio from "../../../../../assets/screenshots/jpgeib-portfolio.png";
import HerokuIcon from "../../../../../assets/images/heroku-icon.png";

import "./style.css";

class ProjectSectionMobile extends Component {
    render() {
        return (
            <div id="project-page-mobile">
                <Responsive {...Responsive.onlyMobile} maxwidth={414} as={Grid} id="project-headers-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="project-header-mobile" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Header id="project-subheader-mobile" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="project-container-mobile">
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Image id="portfolio-image-mobile" src={OnlinePortfolio} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="portfolio-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="portfolio-header-mobile" as="h2">Online Portfolio</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="portfolio-links-container-mobile">
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="github-header-mobile" as="h3"><a id="portfolio-github-mobile" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                                </Responsive>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="heroku-header-mobile" as="h3"><a id="portfolio-heroku-mobile" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                                </Responsive>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Image id="allchatv2-image-mobile" src={AllChatV2} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv2-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="allchatv2-header-mobile" as="h2">AllChat V2</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv2-links-container-mobile">
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="github-header-mobile" as="h3"><a id="allchatv2-github-mobile" href="https://github.com/paulmhan/AllChat-v2" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                                </Responsive>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="heroku-header-mobile" as="h3"><a id="allchatv2-heroku-mobile" href="https://all-chat-v2.herokuapp.com" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                                </Responsive>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">An online chatroom app capable of translating messages from one language to another, broadening the scope of communication.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: React/Redux, Semantic UI React Framework, CSS, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Image id="allchatv1-image-mobile" src={AllChatV1} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv1-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="allchatv1-header-mobile" as="h2">AllChat V1</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="allchatv1-links-container-mobile">
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="github-header-mobile" as="h3"><a id="allchatv1-github-mobile" href="https://github.com/paulmhan/AllChat" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                                </Responsive>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={8}>
                                                    <Header id="heroku-header-mobile" as="h3"><a id="allchatv1-heroku-mobile" href="https://all-chat-app.herokuapp.com/" target=":blank"><Image src={HerokuIcon} size="tiny" /></a></Header>
                                                </Responsive>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">A basic online chatroom app that serves as the foundational stepping stone for an even more ambitious project.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: React, Semantic UI React Framework, CSS</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                    {/* <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Image id="feast-fitness-image-mobile" src={FeastFitness} size="big" />
                        </Responsive>
                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="feast-fitness-container-mobile">
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Header id="feast-fitness-header-mobile" as="h2">Feast-Fitness</Header>
                                    </Responsive>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid} id="feast-fitness-links-container-mobile">
                                            <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                                    <Header id="github-header-mobile" as="h3"><a id="feast-fitness-github-mobile" href="https://github.com/paulmhan/feast-fitness" target=":blank"><Icon id="github" size="huge" name="github" /></a></Header>
                                                </Responsive>
                                            </Responsive>
                                        </Responsive>
                                    </Responsive>
                                </Responsive>
                                <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Row}>
                                    <Responsive {...Responsive.onlyMobile} maxWidth={414} as={Grid.Column} width={16}>
                                        <List bulleted size="big">
                                            <List.Item className="project-list-item-mobile">A BMI tracker that helps users log their meals and caloric intake in order to reach their fitness goals.</List.Item>
                                            <List.Item className="project-list-item-mobile">Role/Responsibility: Front-End Development, Front-End Design</List.Item>
                                            <List.Item className="project-list-item-mobile">Technologies used: HTML5, CSS, Materialize CSS Framework, Adobe Photoshop</List.Item>
                                        </List>
                                    </Responsive>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive> */}
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionMobile;