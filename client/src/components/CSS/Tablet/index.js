import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import CSS from "../../../assets/images/CSS-icon.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Image id="css-logo-tablet" src={CSS} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Header id="css-header-tablet" as="h2">CSS</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Tablet;