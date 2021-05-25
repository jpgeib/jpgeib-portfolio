import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import JQuery from "../../../assets/images/jquery-logo.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Image id="jquery-logo-computer" src={JQuery} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Header id="jquery-header-computer" as="h2">jQuery</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;