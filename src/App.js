import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import IngredientComponent from "./components/IngredientComponent";
import MainSite from "./components/MainSite";
import DishComponent from "./components/DishComponent";
import NotFound from "./components/NotFound";
import { IngredientsContext } from "./providers/IngredientProvider";

function App() {
  const { ingredients } = useContext(IngredientsContext);
  const [ingredientsList, setIngredientsList] = useState(ingredients);

  const copyMultidimensionalArray = (arr) => {
    return JSON.parse(JSON.stringify(arr));
  };

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
  return (
    <IngredientsContext.Provider
      value={{
        ingredients: ingredientsList,
        AddIngredient: AddIngredient,
        RemoveIngredient: RemoveIngredient,
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/order/pizza" component={DishComponent} />
          <Route exact path="/order/calzone" component={DishComponent} />
          <Route exact path="/ingredients" component={IngredientComponent} />
          <Route exact path="/" component={MainSite} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </IngredientsContext.Provider>
  );
}

export default App;
