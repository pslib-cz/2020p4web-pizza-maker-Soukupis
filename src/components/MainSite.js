import React from "react";
import NavbarLayout from "./NavbarLayout";
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
const MainSite = () => {
  const history = useHistory();
  return (
    <>
      <NavbarLayout />
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12" xs="12">
            <Card body inverse color="success">
              <CardTitle tag="h5">Ingredients</CardTitle>
              <CardText>Here you can change your ingredients</CardText>
              <Button onClick={() => history.push("/ingredients")}>
                Button
              </Button>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <Card body inverse color="success">
              <CardTitle tag="h5">Pizza</CardTitle>
              <CardText>Here you can order your pizza</CardText>
              <Button onClick={() => history.push("/order/pizza")}>
                Button
              </Button>
            </Card>
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            {" "}
            <Card body inverse color="success">
              <CardTitle tag="h5">Calzone</CardTitle>
              <CardText>here you can order your calzone</CardText>
              <Button onClick={() => history.push("/order/calzone")}>
                Button
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainSite;
