import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import JavaScript from "../../../assets/images/Javascript-icon.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Image id="javascript-logo-tablet" src={JavaScript} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Header id="javascript-header-tablet" as="h2">JavaScript</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Tablet;