import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import '../App.css';

import Home from './views/home';
import Gist from './views/gist';
import Social from './views/social';

export default class AppMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Ottunblog</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/gist">Gist</Link>
                </NavItem>
                <NavItem>
                  <Link to="/social">Social</Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/gist" component={Gist} />
          <Route path="/social" component={Social} />

        </div>
      </Router>
    );
  }
}