import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Image id="mongo-logo-tablet" src={MongoDB} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Header id="mongo-header-tablet" as="h2">MongoDB</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Tablet;