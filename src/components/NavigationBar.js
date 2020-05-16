import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #ffff; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: 1.2em;
    color: #00695c;
    &:hover { color: #2BBBAD; }
  }
  .navbar-brand {
    font-size: 2em;
    color: #00B894;
    &:hover { color: #00B894; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
 const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/set">Set</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/results">Results</Nav.Link></Nav.Item>
        </Nav>
        <Navbar.Brand>Cytomod Server</Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar