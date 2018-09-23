import * as actionTypes from "./actionTypes";

export const addTodo = text => {
  return {
    type: actionTypes.ADD_TODO,
    text: text
  };
};
