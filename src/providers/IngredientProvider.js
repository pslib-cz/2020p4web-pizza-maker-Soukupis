import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

const initialState = {
  ingredients: [
    { name: "pork cut", category: "meat" },
    { name: "ananas", category: "fruits" },
    { name: "chicken", category: "meat" },
  ],
  maxIngredientsCount: 4,
};
const copyMultidimensionalArray = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      console.log(action);
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          { name: action.name, category: action.category },
        ],
      };
    }
    case REMOVE_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.slice(0, action.index),
          ...state.ingredients.slice(action.index + 1),
        ],
      };
    }
  }
};
export const IngredientsContext = createContext(initialState);

export const IngredientsProvider = ({ children, ...rest }) => {
  const [state, dispatch] = useReducer(ingredientsReducer, initialState);
  return (
    <>
      <IngredientsContext.Provider value={[state, dispatch]}>
        {children}
      </IngredientsContext.Provider>
    </>
  );
};
