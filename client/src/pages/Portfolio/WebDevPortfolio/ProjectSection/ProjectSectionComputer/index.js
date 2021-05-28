import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import OnlinePortfolioComputer from "../../../../../components/OnlinePortfolio/Computer";
import AllChatV2Computer from "../../../../../components/AllChatV2/Computer";
import AllChatV1Computer from "../../../../../components/AllChat/Computer";

import "./style.css";

class ProjectSectionComputer extends Component {
    render() {
        return (
            <div id="project-page-computer">
                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid} id="project-headers-container-computer">
                    <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={16}>
                            <Header id="project-header-computer" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Row}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid.Column} width={16}>
                            <Header id="project-subheader-computer" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyComputer} minWidth={800} as={Grid} id="project-container-computer">
                    <OnlinePortfolioComputer />
                    <AllChatV2Computer />
                    <AllChatV1Computer />
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionComputer;