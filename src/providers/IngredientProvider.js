import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const ADD_TO_ORDER = "ADD_TO_ORDER";
const initialState = {
  ingredients: [
    { name: "pork cut", category: "meat" },
    { name: "ananas", category: "fruits" },
    { name: "chicken", category: "meat" },
  ],
  maxIngredientsCount: 4,
  currentOrder: [],
};
const copyMultidimensionalArray = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      console.log(action);
      let arr = copyMultidimensionalArray(state);
      arr.ingredients.push({ name: action.name, category: action.category });
      return arr;
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
    case ADD_TO_ORDER: {
      console.log(action);
      let arr = copyMultidimensionalArray(state);
      arr.currentOrder.push({ name: action.name, category: action.category });
      return arr;
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
