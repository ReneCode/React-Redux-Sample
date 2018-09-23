import * as actionTypes from "../actions/actionTypes";

const initialState = [];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default todos;
