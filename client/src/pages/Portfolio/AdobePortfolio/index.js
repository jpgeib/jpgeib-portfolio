import React, { Component } from "react";
import AdobeComputer from "./AdobeComputer";

class AdobePortfolio extends Component {
    render() {

        const { adobe } = this.props;

        return (
            <>
                <AdobeComputer adobe={adobe} />
            </>
        )
    }
}

export default AdobePortfolio;