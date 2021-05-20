import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import AdobePortfolio from "../../pages/Portfolio/AdobePortfolio";
import Navbar from "../../components/Navbar";
import ProjectSection from "../../pages/Portfolio/WebDevPortfolio/ProjectSection";
import SkillSection from "../../pages/Portfolio/WebDevPortfolio/SkillSection";
import { websiteText } from "../../text";

class App extends Component {
  
  render() {

    const { homeText } = websiteText;

    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home bio={homeText} />} />
        <Route exact path="/adobe" component={AdobePortfolio} />
        <Route exact path="/webdev/projects" component={ProjectSection} />
        <Route exact path="/webdev/skills" component={SkillSection} />
      </>
    );
  }
}

export default App;
