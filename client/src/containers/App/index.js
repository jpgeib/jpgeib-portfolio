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

  state = {
    windowWidth: window.innerWidth
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {

    const { homeText } = webText;
    const { homeStyle, projectStyle, skillStyle, adobeStyle, blogStyle } = webStyle;

    return (
      <>
        <Navbar />
        <Route exact path="/" render={() => <Home bio={homeText} width={this.state.windowWidth} home={homeStyle} />} />
        <Route exact path="/adobe" render={() => <AdobePortfolio width={this.state.windowWidth} adobe={adobeStyle} />} />
        <Route exact path="/webdev/projects" render={() => <ProjectSection width={this.state.windowWidth} project={projectStyle} />} />
        <Route exact path="/webdev/skills" render={() => <SkillSection width={this.state.windowWidth} skills={skillStyle} />} />
        <Route exact path="/blog" render={() => <Blog width={this.state.windowWidth} blog={blogStyle} />} />
        <Footer />
      </>
    );
  }
}

export default App;
