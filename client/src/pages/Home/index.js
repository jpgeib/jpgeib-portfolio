import React, { Component } from "react";
import HomeComputer from "./HomeComputer";
import HomeMobile from "./HomeMobile";
import HomeTablet from "./HomeTablet";

class Home extends Component {
    render() {
        
        const { bio, home, width } = this.props;
        
        return (
            <>
                {width <= 426 && <HomeMobile bio={bio} home={home} />}
                {(width >= 427 && width <= 1023) && <HomeTablet bio={bio} home={home} />}
                {width >= 1024 && <HomeComputer bio={bio} home={home} />}
            </>
        );
    }
}

export default Home;