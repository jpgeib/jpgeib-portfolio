import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import MongoDB from "../../../assets/images/mongodb-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Image id="mongo-logo-computer" src={MongoDB} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Header id="mongo-header-computer" as="h2">MongoDB</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;