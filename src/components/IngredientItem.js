import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { IngredientsContext } from "../providers/IngredientProvider";
const IngredientItem = (props) => {
  const { RemoveIngredient } = useContext(IngredientsContext);
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>
          <hr />
          <Button color="primary" style={{ margin: 2 }}>
            Edit
          </Button>
          <Button
            color="danger"
            style={{ margin: 2 }}
            onClick={() => RemoveIngredient(props.index)}
          >
            Remove
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default IngredientItem;
