import React, { useContext, useState } from "react";
import NavbarLayout from "./NavbarLayout";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { IngredientsContext } from "../providers/IngredientProvider";
import IngredientItem from "./IngredientItem";

const IngredientComponent = () => {
  const { ingredients, AddIngredient } = useContext(IngredientsContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  function renderIngredients() {
    let arr = ingredients.map((item, index) => {
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
          <Col>
            <h1>Ingredients</h1>

            <Button
              color="primary"
              onClick={toggle}
              style={{ marginBottom: "5px" }}
            >
              Add Ingredient
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" sm="12" xs="12">
            <Collapse isOpen={isOpen}>
              <Form>
                <FormGroup>
                  <Label>Ingredient name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ham"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Ingredient category</Label>
                  <Input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="meat"
                  />
                </FormGroup>
                <Button
                  color="success"
                  onClick={() => {
                    AddIngredient(name, category);
                    toggle();
                    setCategory("");
                    setName("");
                  }}
                >
                  Přidat
                </Button>
              </Form>
            </Collapse>
          </Col>
        </Row>
        <hr />
        <Row>{renderIngredients()}</Row>
      </Container>
    </>
  );
};
export default IngredientComponent;
