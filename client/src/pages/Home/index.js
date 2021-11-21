import React, { Component } from "react";
import HomeComputer from "./HomeComputer";
import HomeMobile from "./HomeMobile";
import HomeTablet from "./HomeTablet";

class Home extends Component {
    render() {
        
        const { text, home, width } = this.props;
        
        return (
            <>
                {width <= 426 && <HomeMobile text={text} home={home} />}
                {(width >= 427 && width <= 1023) && <HomeTablet text={text} home={home} />}
                {width >= 1024 && <HomeComputer text={text} home={home} />}
            </>
        );
    }
}

export default Home;