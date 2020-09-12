import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
// import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";
import AdobePortfolio from "../../pages/Portfolio/AdobePortfolio";
import WebDevPortfolio from "../../pages/Portfolio/WebDevPortfolio";
import Navbar from "../../components/Navbar";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/adobe" component={AdobePortfolio} />
        <Route exact path="/webdev" component={WebDevPortfolio} />
        <Route exact path="/webdev/projects" component={WebDevPortfolio} />
        <Route exact path="/webdev/skills" component={WebDevPortfolio} />
      </>
    );
  }
}

export default App;
