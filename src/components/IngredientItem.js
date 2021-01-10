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
  ADD_TO_ORDER_PIZZA,
  ADD_TO_ORDER_CALZONE,
  REMOVE_FROM_ORDER_PIZZA,
  REMOVE_FROM_ORDER_CALZONE,
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
          ) : (props.mode === "show") & (props.added === "pizza") ? (
            <Col>
              <Button
                color="danger"
                onClick={() =>
                  dispatch({
                    type: REMOVE_FROM_ORDER_PIZZA,
                    index: props.index,
                  })
                }
              >
                Remove
              </Button>
            </Col>
          ) : (props.mode === "show") & (props.added === "calzone") ? (
            <Col>
              <Button
                color="danger"
                onClick={() =>
                  dispatch({
                    type: REMOVE_FROM_ORDER_CALZONE,
                    index: props.index,
                  })
                }
              >
                Remove
              </Button>
            </Col>
          ) : (
            <Col>
              <Button
                color="success"
                onClick={() =>
                  dispatch({
                    type:
                      props.dish === "pizza"
                        ? ADD_TO_ORDER_PIZZA
                        : ADD_TO_ORDER_CALZONE,
                    name: props.name,
                    category: props.category,
                  })
                }
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
