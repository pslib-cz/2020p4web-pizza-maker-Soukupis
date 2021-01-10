import React, { useContext } from "react";
import NavbarLayout from "./NavbarLayout";
import { Container, Col, Row, Alert } from "reactstrap";
import { IngredientsContext } from "../providers/IngredientProvider";
import IngredientItem from "./IngredientItem";

const DishComponent = (props) => {
  const [state] = useContext(IngredientsContext);

  function renderIngredients(mode) {
    let arr = state.ingredients.map((item, index) => {
      if (mode === "pizza") {
        let read = false;
        state.currentOrderPizza.forEach((item2) => {
          if ((item.name === item2.name) | (item.category === item2.category)) {
            read = true;
          }
        });
        if (!read) {
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
                dish={
                  window.location.href.includes("pizza") ? "pizza" : "calzone"
                }
              />
            </Col>
          );
        }
      } else if (mode === "calzone") {
        let read = false;
        state.currentOrderCalzone.forEach((item2) => {
          if ((item.name === item2.name) | (item.category === item2.category)) {
            read = true;
          }
        });
        if (!read) {
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
                dish={
                  window.location.href.includes("pizza") ? "pizza" : "calzone"
                }
              />
            </Col>
          );
        }
      }
      return "";
    });
    return arr;
  }
  function renderOrderPizza() {
    let arr = state.currentOrderPizza.map((item, index) => {
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
            added="pizza"
          />
        </Col>
      );
    });
    return arr;
  }
  function renderOrderCalzone() {
    let arr = state.currentOrderCalzone.map((item, index) => {
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
            added="calzone"
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
        <Row>
          {window.location.href.includes("pizza") &
          (state.currentOrderPizza.length === 0) ? (
            <Alert color="danger">
              Ještě nemáte nic vybraného, vyberty si!
            </Alert>
          ) : window.location.href.includes("pizza") &
            (state.currentOrderPizza.length !== 0) ? (
            renderOrderPizza()
          ) : window.location.href.includes("calzone") &
            (state.currentOrderCalzone.length === 0) ? (
            <Alert color="danger">
              Ještě nemáte nic vybraného, vyberty si!
            </Alert>
          ) : window.location.href.includes("calzone") &
            (state.currentOrderCalzone.length !== 0) ? (
            renderOrderCalzone()
          ) : (
            <Alert color="danger">Nastala chyba</Alert>
          )}
        </Row>
        <hr />
        <Row>
          {window.location.href.includes("pizza")
            ? renderIngredients("pizza")
            : renderIngredients("calzone")}
        </Row>
      </Container>
    </>
  );
};
export default DishComponent;
