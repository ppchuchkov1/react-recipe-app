import React from 'react';
import './Navigation.css';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <Image width='150px' src={logo}></Image>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto'>
            <Nav.Link>
              <NavLink className='navigation-links' to='/'>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='navigation-links' to='/recipes'>
                Search
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className='navigation-links'
                to='/recipes/5ed6604591c37cdc054bc9e4'
              >
                What to cook this week
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavLink className='navigation-links' to='/recipes'>
                Register
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className='navigation-links' to='/recipes'>
                Login
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
