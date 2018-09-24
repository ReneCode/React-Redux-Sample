import * as actionTypes from "../actions/actionTypes";

const addTodo = (state, action) => {
  switch (action.direction) {
    case "undo":
      return state.filter(t => t.text !== action.payload);
      break;

    default:
      // do, redo
      return [
        ...state,
        {
          text: action.payload
        }
      ];
  }
};

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return addTodo(state, action);
    default:
      return state;
  }
};

export default todos;
