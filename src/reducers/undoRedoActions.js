import * as actionTypes from "../actions/actionTypes";

const initialState = {
  steps: [],
  currentIndex: -1
};

export const currentAction = store => {
  const { undoRedoActions } = store.getState();
  if (undoRedoActions && undoRedoActions.currentIndex >= 0) {
    return undoRedoActions.steps[undoRedoActions.currentIndex];
  }
  return null;
};

export const nextAction = store => {
  const { undoRedoActions } = store.getState();
  if (
    undoRedoActions &&
    undoRedoActions.currentIndex + 1 < undoRedoActions.steps.length
  ) {
    return undoRedoActions.steps[undoRedoActions.currentIndex + 1];
  }
  return null;
};

const undoRedoActions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STEP_DO:
      return {
        ...state,
        steps: state.steps.concat(action.payload),
        currentIndex: state.currentIndex + 1
      };

    case actionTypes.DECREMENT_CURRENT_STEP:
      return {
        ...state,
        currentIndex: state.currentIndex - 1
      };

    case actionTypes.INCREMENT_CURRENT_STEP:
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };
    default:
      return state;
  }
};

export default undoRedoActions;
