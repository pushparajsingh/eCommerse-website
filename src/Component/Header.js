import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import DMART from "../Assert/Image/DMART.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => navigate("/")}>
            <img
              src={DMART}
              alt="DMART"
              width={"100px"}
              height={"30px"}
              title="DMART"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="header-menu">
              <span
                className={
                  location.pathname == "/" ? "header-colors" : "header-span"
                }
              >
                Home
              </span>
            </Link>
            <Link to={"/product"} className="header-menu">
              <span
                className={
                  location.pathname == "/product"
                    ? "header-colors"
                    : "header-span"
                }
              >
                Product
              </span>
            </Link>
            <Link to={"/aboutUs"} className="header-menu">
              <span
                className={
                  location.pathname == "/aboutUs"
                    ? "header-colors"
                    : "header-span"
                }
              >
                About Us
              </span>
            </Link>
          </Nav>
          <span
            className="p-1 bg-danger rounded-circle counter"
            style={{ cursor: "pointer" }}
          >
            1
          </span>
          <AiOutlineShoppingCart
            className="display-6"
            style={{ cursor: "pointer", marginRight: "1rem" }}
            onClick={() => navigate("/cartProduct")}
          />
          <DropdownButton
            as={ButtonGroup}
            key={"Warning"}
            id={`dropdown-variants-Warning`}
            variant={"Secondary".toLowerCase()}
            title={"Profile"}
          >
            <Dropdown.Item eventKey="1">Home</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3" onClick={() => navigate("/signUpForm")}>
              Sign Up
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              eventKey="4"
              onClick={() => navigate("/logInUserForm")}
            >
              User Login
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="4"
              onClick={() => navigate("/logInAdminForm")}
            >
              Admin Login
            </Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
