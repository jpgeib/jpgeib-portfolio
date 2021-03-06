import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import AdobePortfolio from "../../pages/Portfolio/AdobePortfolio";
import Navbar from "../../components/Navbar";
import ProjectSection from "../../pages/Portfolio/WebDevPortfolio/ProjectSection";
import SkillSection from "../../pages/Portfolio/WebDevPortfolio/SkillSection";
import { webText } from "../../text";
import { webStyle } from "../../styles";

class App extends Component {
  
  render() {

    const { homeText } = webText;
    const { homeStyle } = webStyle;

    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home bio={homeText} home={homeStyle} />} />
        <Route exact path="/adobe" component={AdobePortfolio} />
        <Route exact path="/webdev/projects" component={ProjectSection} />
        <Route exact path="/webdev/skills" component={SkillSection} />
      </>
    );
  }
}

export default App;
