import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/dashboard.png';

function NavbarTop() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Dashboard
      </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavbarTop;
