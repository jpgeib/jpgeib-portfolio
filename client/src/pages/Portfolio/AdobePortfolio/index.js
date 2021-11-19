import React, { Component } from "react";
import AdobeComputer from "./AdobeComputer";
import AdobeMobile from "./AdobeMobile";
import AdobeTablet from "./AdobeTablet";

class AdobePortfolio extends Component {
    render() {

        const { adobe, width } = this.props;

        return (
            <>
                {width <= 426 && <AdobeMobile adobe={adobe} />}
                {(width >= 427 && width <= 1023) && <AdobeTablet adobe={adobe} />}
                {width >= 1024 && <AdobeComputer adobe={adobe} />}
            </>
        )
    }
}

export default AdobePortfolio;