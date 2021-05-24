import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class Tablet extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={8}>
                    <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid}>
                        <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Row}>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Image id="html5-logo-tablet" src={HTML5} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyTablet} minWidth={415} maxWidth={799} as={Grid.Column} width={16}>
                                <Header id="html5-header-tablet" as="h2">HTML5</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Tablet;