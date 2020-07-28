import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Portfolio from "../../pages/Portfolio";


class App extends Component {
  
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    );
  }
}

export default App;
