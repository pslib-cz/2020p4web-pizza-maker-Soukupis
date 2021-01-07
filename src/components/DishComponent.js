import React from "react";
import NavbarLayout from "./NavbarLayout";
import { Container } from "reactstrap";
const DishComponent = (props) => {
  return (
    <>
      <NavbarLayout />
      <Container>Dish Component {console.log(props.match.params)}</Container>
    </>
  );
};
export default DishComponent;
