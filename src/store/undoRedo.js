import * as actionType from "../actions/actionTypes";
import { stepDo, decrementCurrentStep, incrementCurrentStep } from "../actions";

import { currentAction, nextAction } from "../reducers/undoRedoActions";

const undo = store => {
  const action = currentAction(store);
  if (action) {
    const newAction = {
      ...action,
      direction: "undo"
    };
    try {
      store.dispatch(newAction);
      store.dispatch(decrementCurrentStep());
    } catch (err) {}
  }
};

const redo = store => {
  const action = nextAction(store);
  if (action) {
    const newAction = {
      ...action,
      direction: "redo"
    };
    try {
      store.dispatch(newAction);
      store.dispatch(incrementCurrentStep());
    } catch (err) {}
  }
};

const undoRedo = store => next => action => {
  switch (action.type) {
    case actionType.UNDO:
      undo(store);
      break;

    case actionType.REDO:
      redo(store);
      break;

    case actionType.DECREMENT_CURRENT_STEP:
    case actionType.INCREMENT_CURRENT_STEP:
    case actionType.STEP_DO:
      next(action);
      break;
    default:
      if (action.direction === "undo" || action.direction === "redo") {
        return next(action);
      }
      try {
        const result = next(action);
        // setTimeout(() => {
        store.dispatch(stepDo(action));
        // }, 0);
        return result;
      } catch (err) {}
  }
};

export { undoRedo };
