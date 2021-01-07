import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import IngredientComponent from "./components/IngredientComponent";
import MainSite from "./components/MainSite";
import DishComponent from "./components/DishComponent";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/order/pizza" component={DishComponent} />
        <Route exact path="/order/calzone" component={DishComponent} />
        <Route exact path="/ingredients" component={IngredientComponent} />
        <Route exact path="/" component={MainSite} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
