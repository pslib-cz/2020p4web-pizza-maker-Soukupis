import React from "react";

export const IngredientsContext = React.createContext({
  ingredients: [
    { name: "pork cut", category: "meat" },
    { name: "ananas", category: "fruits" },
    { name: "chicken", category: "meat" },
  ],
});
