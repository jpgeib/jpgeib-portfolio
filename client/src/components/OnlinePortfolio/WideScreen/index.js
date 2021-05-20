import React, { Component } from "react";
import { Grid, Header, Image, List, Responsive } from "semantic-ui-react";
import OnlinePortfolioImage from "../../../assets/screenshots/jpgeib-portfolio.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Image src={OnlinePortfolioImage} size="big" />
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={8}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid} id="portfolio-container-wide">
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={5}>
                                    <Header id="portfolio-header-wide" as="h2">Online Portfolio</Header>
                                </Responsive>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={11}>
                                    <Header id="github-header-wide" as="h3">Github: <a id="portfolio-github-wide" href="https://github.com/jpgeib/jpgeib-portfolio" target=":blank">https://github.com/jpgeib/jpgeib-portfolio</a></Header>
                                    <Header id="heroku-header-wide" as="h3">Heroku: <a id="portfolio-heroku-wide" href="https://jpgeib-portfolio.herokuapp.com/" target=":blank">https://jpgeib-portfolio.herokuapp.com/</a></Header>
                                </Responsive>
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                    <List bulleted size="big">
                                        <List.Item className="project-list-item-wide">An online portfolio created to list and show off my achievements/works in full-stack web development and digital media production.</List.Item>
                                        <List.Item className="project-list-item-wide">Role/Responsibility: Front-End Development, Front-End Design, Back-End Development</List.Item>
                                        <List.Item className="project-list-item-wide">Technologies used: React/Redux, CSS, Semantic UI React Framework, Express.js, Adobe Photoshop</List.Item>
                                    </List>
                                </Responsive>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
}

export default WideScreen;