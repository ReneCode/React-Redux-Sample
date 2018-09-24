import React from "react";
import { connect } from "react-redux";
import { undo, redo } from "../actions/index";

const UndoRedo = ({ dispatch }) => (
  <div>
    <button onClick={() => dispatch(undo())}>Undo</button>
    <button onClick={() => dispatch(redo())}>Redo</button>
  </div>
);

export default connect()(UndoRedo);
