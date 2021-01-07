import React from "react";
import { useHistory } from "react-router-dom";
import NavbarLayout from "./NavbarLayout";
import { Button, Container, Row, Col } from "reactstrap";

const NotFound = (props) => {
  const history = useHistory();
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
            <Button
              color="danger"
              onClick={() => {
                history.push("/");
              }}
              style={{ marginTop: "10px" }}
              size="lg"
            >
              Zpět na hlavní stránku
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
