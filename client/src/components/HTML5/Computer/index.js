import React, { Component } from "react";
import { Grid, Header, Image, Responsive } from "semantic-ui-react";
import HTML5 from "../../../assets/images/HTML-icon.png";

class Computer extends Component {
    render() {
        return (
            <>
                <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={4}>
                    <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid}>
                        <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Row}>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Image id="html5-logo-computer" src={HTML5} size="small" />
                            </Responsive>
                            <Responsive {...Responsive.onlyComputer} minWidth={800} maxWidth={1571} as={Grid.Column} width={16}>
                                <Header id="html5-header-computer" as="h2">HTML5</Header>
                            </Responsive>
                        </Responsive>
                    </Responsive>
                </Responsive>
            </>
        );
    }
};

export default Computer;