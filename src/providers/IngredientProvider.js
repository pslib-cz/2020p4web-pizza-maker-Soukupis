import React, { createContext, useReducer } from "react";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const ADD_TO_ORDER_PIZZA = "ADD_TO_ORDER_PIZZA";
export const ADD_TO_ORDER_CALZONE = "ADD_TO_ORDER_CALZONE";
export const REMOVE_FROM_ORDER_PIZZA = "REMOVE_FROM_ORDER_PIZZA";
export const REMOVE_FROM_ORDER_CALZONE = "REMOVE_FROM_ORDER_CALZONE";

const initialState = {
  ingredients: [
    { name: "pork cut", category: "meat" },
    { name: "ananas", category: "fruits" },
    { name: "chicken", category: "meat" },
  ],
  maxIngredientsCount: 4,
  currentOrderPizza: [],
  currentOrderCalzone: [],
};
const copyMultidimensionalArray = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
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
    case ADD_TO_ORDER_PIZZA: {
      let copiedState = copyMultidimensionalArray(state);
      let add = true;
      copiedState.currentOrderPizza.forEach((item) => {
        if (item.category === action.category) {
          add = false;
        }
      });

      if (
        (copiedState.currentOrderPizza.length <
          copiedState.maxIngredientsCount) &
        add
      ) {
        copiedState.currentOrderPizza.push({
          name: action.name,
          category: action.category,
        });
      }
      return copiedState;
    }
    case ADD_TO_ORDER_CALZONE: {
      let copiedState = copyMultidimensionalArray(state);
      let add = true;
      copiedState.currentOrderCalzone.forEach((item) => {
        if (item.category === action.category) {
          add = false;
        }
      });

      if (
        (copiedState.currentOrderCalzone.length <
          copiedState.maxIngredientsCount) &
        add
      ) {
        copiedState.currentOrderCalzone.push({
          name: action.name,
          category: action.category,
        });
      }
      return copiedState;
    }
    case REMOVE_FROM_ORDER_PIZZA: {
      return {
        ...state,
        currentOrderPizza: [
          ...state.currentOrderPizza.slice(0, action.index),
          ...state.currentOrderPizza.slice(action.index + 1),
        ],
      };
    }
    case REMOVE_FROM_ORDER_CALZONE: {
      return {
        ...state,
        currentOrderCalzone: [
          ...state.currentOrderCalzone.slice(0, action.index),
          ...state.currentOrderCalzone.slice(action.index + 1),
        ],
      };
    }
    default:
      return state;
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
