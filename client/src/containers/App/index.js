import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";
import Navbar from "../../components/Navbar";

class App extends Component {
  
  render() {
    return (
      <>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </>
    );
  }
}

export default App;
