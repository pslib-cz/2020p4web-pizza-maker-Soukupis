import React, { useContext, useState } from "react";
import NavbarLayout from "./NavbarLayout";
import { Container, Col, Row } from "reactstrap";
import { IngredientsContext } from "../providers/IngredientProvider";
import IngredientItem from "./IngredientItem";

const DishComponent = (props) => {
  const [state, dispatch] = useContext(IngredientsContext);

  function renderIngredients() {
    let arr = state.ingredients.map((item, index) => {
      return (
        <Col
          lg="3"
          md="4"
          sm="6"
          xs="12"
          key={item.name}
          style={{ paddingBottom: 10 }}
        >
          <IngredientItem
            name={item.name}
            category={item.category}
            index={index}
            mode="show"
          />
        </Col>
      );
    });
    return arr;
  }
  function renderOrder() {
    let arr = state.currentOrder.map((item, index) => {
      return (
        <Col
          lg="3"
          md="4"
          sm="6"
          xs="12"
          key={item.name}
          style={{ paddingBottom: 10 }}
        >
          <IngredientItem
            name={item.name}
            category={item.category}
            index={index}
            mode="show"
          />
        </Col>
      );
    });
    return arr;
  }

  return (
    <>
      <NavbarLayout />
      <Container>
        <Row>
          <h1>
            {window.location.href.includes("pizza") ? "Pizza" : "Calzone"}
          </h1>
        </Row>
        <hr />
        <Row>{renderOrder()}</Row>
        <hr />
        <Row>{renderIngredients()}</Row>
      </Container>
    </>
  );
};
export default DishComponent;
