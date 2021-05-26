import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import ReduxLogo from "../../../assets/images/redux-logo.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Image id="redux-logo-tablet" src={ReduxLogo} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Header id="redux-header-tablet" as="h2">Redux.js</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Tablet;