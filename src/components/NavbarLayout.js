import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";
const NavbarLayout = () => {
  return (
    <Navbar color="faded" light expand="md" style={{ fontSize: "20pt" }}>
      <NavbarBrand href="/"></NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/" tag={Link}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order/pizza" tag={Link}>
            Pizza
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/order/calzone" tag={Link}>
            Calzone
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/ingredients" tag={Link}>
            Ingredients
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Odkazy
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="https://github.com/Soukupis/MultimeterWebApp">
              Repozitář projektu
            </DropdownItem>
            <DropdownItem href="https://github.com/Soukupis/MultimeterWebApp/tree/master/client">
              Client
            </DropdownItem>
            <DropdownItem href="https://github.com/Soukupis/MultimeterWebApp/tree/master/api">
              Api
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};
export default NavbarLayout;
