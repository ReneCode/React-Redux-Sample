import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import UndoRedo from "./UndoRedo";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <UndoRedo />
      <TodoList />
    </div>
  );
};

export default App;
