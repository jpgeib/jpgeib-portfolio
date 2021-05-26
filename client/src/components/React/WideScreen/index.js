import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import ReactLogo from "../../../assets/images/classic-react-logo.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Image id="react-logo-wide" src={ReactLogo} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Header id="react-header-wide" as="h2">React.js</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default WideScreen;