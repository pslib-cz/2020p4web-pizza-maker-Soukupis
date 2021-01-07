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
const NavbarLayout = () => {
  return (
    <Navbar color="faded" light expand="md" style={{ fontSize: "20pt" }}>
      <NavbarBrand href="/"></NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/order/pizza">Pizza</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/order/calzone">Calzone</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Ingredients">Ingredients</NavLink>
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
