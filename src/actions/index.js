import * as actionTypes from "./actionTypes";

export const addTodo = text => {
  return {
    type: actionTypes.ADD_TODO,
    payload: text
  };
};

export const undo = () => {
  return { type: actionTypes.UNDO };
};

export const redo = () => {
  return { type: actionTypes.REDO };
};

export const stepDo = action => {
  return {
    type: actionTypes.STEP_DO,
    payload: action
  };
};

export const decrementCurrentStep = () => {
  return { type: actionTypes.DECREMENT_CURRENT_STEP };
};

export const incrementCurrentStep = () => {
  return { type: actionTypes.INCREMENT_CURRENT_STEP };
};
