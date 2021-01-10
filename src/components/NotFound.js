import React from "react";
import NavbarLayout from "./NavbarLayout";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <>
      <NavbarLayout />
      <Container>
        <Row style={{ fontSize: "70pt" }}>
          <Col>Oops 404</Col>
        </Row>
        <Row style={{ fontSize: "25pt" }}>
          <Col>
            Omlouváme se, ale požadovaná stránka nebyla na našem webu nalezena
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="danger" style={{ marginTop: "10px" }} size="lg">
              <Link to="/" style={{ color: "white", textUnderline: "none" }}>
                Zpět na hlavní stránku
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
