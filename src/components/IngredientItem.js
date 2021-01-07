import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";
import {
  IngredientsContext,
  REMOVE_INGREDIENT,
} from "../providers/IngredientProvider";
const IngredientItem = (props) => {
  const [state, dispatch] = useContext(IngredientsContext);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>

          {props.mode === "edit" ? (
            <>
              <hr />
              <Button color="primary" style={{ margin: 2 }}>
                Edit
              </Button>
              <Button
                color="danger"
                style={{ margin: 2 }}
                onClick={() =>
                  dispatch({ type: REMOVE_INGREDIENT, index: props.index })
                }
              >
                Remove
              </Button>
            </>
          ) : (
            <Col>
              <Button
              /*
                onClick={() =>
                  AddIngredientToOrder({
                    name: props.name,
                    category: props.category,
                  })
                }
                color="success"*/
              >
                Add
              </Button>
            </Col>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default IngredientItem;
