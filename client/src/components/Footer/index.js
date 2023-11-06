import React, { Component } from "react";
import { Image, Grid, Header } from "semantic-ui-react";
import ReactLogoWhite from "../../assets/images/React-Logo-White.png";
import SemanticLogoWhite from "../../assets/images/semantic-ui-logo.png";

import "./style.css";

class Footer extends Component {

    handleColumnNumber = (width) => {
        let columnNum;
        if (width <= 426) {
            columnNum = 4;
        } else if (width >= 427 && width <= 1023) {
            columnNum = 2;
        } else if (width >= 1024) {
            columnNum = 1;
        }
        console.log(columnNum);
        return columnNum;
    }

    render() {

        const { width } = this.props;

        return (
            <>
                <Grid id="footer">
                    <Grid.Row>
                        <Grid.Column>
                            <Header id="footer-header" as="h1">Powered by:</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row id="footer-icons">
                        <Grid.Column width={this.handleColumnNumber(width)}>
                            <a href="https://reactjs.org/" target=":blank">
                                <Image className="footer-link" id="react-link" size="tiny" src={ReactLogoWhite} />
                            </a>
                        </Grid.Column>
                        <Grid.Column width={this.handleColumnNumber(width)}>
                            <a href="https://react.semantic-ui.com/" target=":blank">
                                <Image className="footer-link" id="semantic-link" size="tiny" src={SemanticLogoWhite} />
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}

export default Footer;