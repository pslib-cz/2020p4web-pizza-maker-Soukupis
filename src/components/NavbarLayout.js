import React, { useContext, useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { IngredientsContext } from "../providers/IngredientProvider";
import { Link } from "react-router-dom";
const NavbarLayout = () => {
  const [state] = useContext(IngredientsContext);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  function renderPizzaOrder() {
    let arr = state.currentOrderPizza.map((item) => {
      return <li key={item.name}>{item.name}</li>;
    });
    return arr;
  }
  function renderCalzoneOrder() {
    let arr = state.currentOrderCalzone.map((item) => {
      return <li key={item.name}>{item.name}</li>;
    });
    return arr;
  }

  return (
    <>
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
        </Nav>
        <NavbarText>
          <Button
            color="success"
            onClick={() => {
              toggle();
            }}
          >
            Objednat!
          </Button>
        </NavbarText>
      </Navbar>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Objednávka</ModalHeader>
        <ModalBody>
          {(state.currentOrderPizza.length !== 0) &
          (state.currentOrderCalzone.length !== 0) ? (
            <>
              <h2>Pizza</h2>
              <ul>{renderPizzaOrder()}</ul>
              <h2>Calzone</h2>
              <ul>{renderCalzoneOrder()}</ul>
            </>
          ) : state.currentOrderCalzone.length !== 0 ? (
            <>
              <h2>Calzone</h2>
              <ul>{renderCalzoneOrder()}</ul>
            </>
          ) : state.currentOrderPizza.length !== 0 ? (
            <>
              <h2>Pizza</h2>
              <ul>{renderPizzaOrder()}</ul>
            </>
          ) : (
            "Nemáte nic vybráno, vyberte si!"
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default NavbarLayout;
