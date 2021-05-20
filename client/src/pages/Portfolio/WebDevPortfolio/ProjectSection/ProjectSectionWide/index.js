import React, { Component } from "react";
import { Grid, Header, Responsive } from "semantic-ui-react";
import OnlinePortfolioWide from "../../../../../components/OnlinePortfolio/WideScreen";
import AllChatV2Wide from "../../../../../components/AllChatV2/WideScreen";
import AllChatV1Wide from "../../../../../components/AllChat/WideScreen";

import "./style.css";

class ProjectSectionWide extends Component {
    render() {
        return (
            <div id="project-page-wide">
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="project-headers-container-wide">
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="project-header-wide" as="h1">Full-Stack Web Development Projects</Header>
                        </Responsive>
                    </Responsive>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                            <Header id="project-subheader-wide" as="h3">Projects are listed in order of most recent with links provided:</Header>
                        </Responsive>
                    </Responsive>
                </Responsive>
                <Responsive {...Responsive.onlyWidescreen} as={Grid} id="project-container-wide">
                    <OnlinePortfolioWide />
                    <AllChatV2Wide />
                    <AllChatV1Wide />
                </Responsive>
            </div>
        );
    }
};

export default ProjectSectionWide;