import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  state = {
    showMenu: false,
    close: false,
    show: false
  };

  handleClick = () => {
    this.setState(state => ({
      showMenu: !state.showMenu,
      close: !state.close,
      show: !state.show
    }));
  };

  render() {
    return (
      <header>
        <div
          className={this.state.close ? "menu-btn close" : "menu-btn"}
          onClick={this.handleClick}
        >
          <div className={this.state.show ? "btn-line show" : "btn-line"} />
          <div className={this.state.show ? "btn-line show" : "btn-line"} />
          <div className={this.state.show ? "btn-line show" : "btn-line"} />
        </div>
        <nav className={this.state.show ? "menu show" : "menu"}>
          <div
            className={this.state.show ? "menu-branding show" : "menu-branding"}
          >
            <div className="portrait" />
          </div>
          <ul className={this.state.show ? "menu-nav show" : "menu-nav"}>
            <li
              className={this.state.show ? "nav-item show" : "nav-item"}
              onClick={this.handleClick}
            >
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="current"
              >
                Home
              </NavLink>
            </li>
            <li
              className={this.state.show ? "nav-item show" : "nav-item"}
              onClick={this.handleClick}
            >
              <NavLink
                to="/aboutme"
                className="nav-link"
                activeClassName="current"
              >
                About Me
              </NavLink>
            </li>
            <li
              className={this.state.show ? "nav-item show" : "nav-item"}
              onClick={this.handleClick}
            >
              <NavLink
                to="/work"
                className="nav-link"
                activeClassName="current"
              >
                My Work
              </NavLink>
            </li>
            <li
              className={this.state.show ? "nav-item show" : "nav-item"}
              onClick={this.handleClick}
            >
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="current"
              >
                How to Reach Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
