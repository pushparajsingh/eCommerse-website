import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import DMART from "../Assert/Image/DMART.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  // console.log(333, location);
  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={DMART}
              alt="DMART"
              width={"100px"}
              height={"30px"}
              title="DMART"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={""} className="header-menu">
              <span className={location.pathname == "/" ? "header-colors" : ""}>
                Home
              </span>
            </Link>
            <Link to={""} className="header-menu">
              <span className="header-span">Features</span>
            </Link>
            <Link to={""} className="header-menu">
              <span className="header-span"> Pricing</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
