import React from 'react';
import logo from '../images/logo/logo.png'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory } from 'react-router';
const Header = () => {
  const { user, logOut, admin } = useAuth();
  const history = useHistory();

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img src={logo} className='w-75' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="text-white" as={Link} to='/'>Home</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/explore'>Explore</Nav.Link>
            {user?.email ? <Nav.Link className="text-white" as={Link} to='/dashboard'>Dashboard</Nav.Link> : ""}

            {user?.email ? <p className='mt-2 mx-3 text-white'>Hey, {user.displayName}</p>
              : <><Nav.Link  className="text-white" as={Link} to='/registration'>Registration</Nav.Link> <Nav.Link  className="text-white" as={Link} to='/login'>Login</Nav.Link></>}


          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
