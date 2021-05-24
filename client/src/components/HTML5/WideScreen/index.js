import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Image id="html5-logo-wide" src={HTML5} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Header id="html5-header-wide" as="h2">HTML5</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default WideScreen;