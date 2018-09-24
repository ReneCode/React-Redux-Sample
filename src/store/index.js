import { createStore, applyMiddleware } from "redux";

import rootReducer from "../reducers";
import { logger } from "./logger";
import { undoRedo } from "./undoRedo";

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, undoRedo)
);
