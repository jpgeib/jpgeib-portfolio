import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Image id="css-logo-wide" src={CSS} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Header id="css-header-wide" as="h2">CSS</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default WideScreen;