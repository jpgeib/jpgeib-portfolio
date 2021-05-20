import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import OnlinePortfolioMobile from "../../../../../components/OnlinePortfolio/Mobile";
import AllChatV2Mobile from "../../../../../components/AllChatV2/Mobile";
import AllChatV1Mobile from "../../../../../components/AllChat/Mobile";

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
                    <OnlinePortfolioMobile />
                    <AllChatV2Mobile />
                    <AllChatV1Mobile />
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionMobile;