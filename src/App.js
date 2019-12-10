import React from "react";
import "./styles/global.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Project from "./components/Project";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

export default () => (
  <Router>
    <Header />

    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/work" component={Work} />
      <Route path="/Contact" component={Contact} />
      <Route path="/project/:id" component={Project} />
      <Route path="/notFound" component={NotFound} />

      <Redirect to="/notFound" />
    </Switch>

    <Footer />
  </Router>
);
