import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import AdobePortfolio from "../../pages/Portfolio/AdobePortfolio";
import Navbar from "../../components/Navbar";
import ProjectSection from "../../pages/Portfolio/WebDevPortfolio/ProjectSection";
import SkillSection from "../../pages/Portfolio/WebDevPortfolio/SkillSection";
import Blog from "../../pages/Blog";
import Footer from "../../components/Footer";
import { webText } from "../../text";
import { webStyle } from "../../styles";

import "./style.css";

class App extends Component {
  
  render() {

    const { homeText } = webText;
    const { homeStyle, projectStyle, skillStyle, adobeStyle, blogStyle } = webStyle;

    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home bio={homeText} home={homeStyle} />} />
        <Route exact path="/adobe" render={() => <AdobePortfolio adobe={adobeStyle} />} />
        <Route exact path="/webdev/projects" render={() => <ProjectSection project={projectStyle} />} />
        <Route exact path="/webdev/skills" render={() => <SkillSection skills={skillStyle} />} />
        <Route exact path="/blog" render={() => <Blog blog={blogStyle} />} />
        <Footer />
      </>
    );
  }
}

export default App;
