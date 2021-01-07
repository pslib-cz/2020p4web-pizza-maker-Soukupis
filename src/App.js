import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import IngredientComponent from "./components/IngredientComponent";
import MainSite from "./components/MainSite";
import DishComponent from "./components/DishComponent";
import NotFound from "./components/NotFound";
import { IngredientsProvider } from "./providers/IngredientProvider";

function App() {
  /*
  const { ingredients, maxIngredientsCount } = useContext(IngredientsContext);
  const [ingredientsList, setIngredientsList] = useState(ingredients);

  const [addedIngredients, setAddedIngredients] = useState([]);

  const AddIngredient = (name, category) => {
    let arr = copyMultidimensionalArray(ingredientsList);
    arr.push({ name: name, category: category });
    setIngredientsList(arr);
  };
  const RemoveIngredient = (index) => {
    let arr = copyMultidimensionalArray(ingredientsList);
    arr.splice(index, 1);
    setIngredientsList(arr);
  };

  const AddIngredientToOrder = (ingredient) => {
    let arr = copyMultidimensionalArray(addedIngredients);
    let add = true;
    arr.forEach((element) => {
      if (element.category === ingredient.category) {
        add = false;
      }
    });
    if (add & (addedIngredients.length > maxIngredientsCount)) {
      arr.push(ingredient);
      setAddedIngredients(arr);
      console.log(arr);
    } else {
      console.log("Už to tam je");
    }
  };
*/
  return (
    <IngredientsProvider>
      <Router>
        <Switch>
          <Route exact path="/order/pizza" component={DishComponent} />
          <Route exact path="/order/calzone" component={DishComponent} />
          <Route exact path="/ingredients" component={IngredientComponent} />
          <Route exact path="/" component={MainSite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </IngredientsProvider>
  );
}

export default App;
