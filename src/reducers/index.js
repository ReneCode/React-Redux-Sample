import { combineReducers } from "redux";
import todos from "./todos";

import undoRedoActions from "./undoRedoActions";

export default combineReducers({
  todos: todos,
  undoRedoActions: undoRedoActions
});
