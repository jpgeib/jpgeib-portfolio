import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class WideScreen extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyWidescreen} as={Grid}>
                        <Responsive {...Responsive.onlyWidescreen} as={Grid.Row}>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Image id="mongo-logo-wide" src={MongoDB} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyWidescreen} as={Grid.Column} width={16}>
                                <Header id="mongo-header-wide" as="h2">MongoDB</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default WideScreen;