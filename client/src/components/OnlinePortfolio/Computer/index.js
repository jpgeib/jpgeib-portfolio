import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                        <Image src={OnlinePortfolioImage} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={8}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid} id="portfolio-container-computer">
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                    <Header id="portfolio-header-computer" as="h2">Online Portfolio</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                    <Header id="github-header-computer" as="h3">Github: <a id="portfolio-github-computer" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                    <Header id="heroku-header-computer" as="h3">Heroku: <a id="portfolio-heroku-computer" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-computer">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item className="project-list-item-computer">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-computer">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                    </List>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;
