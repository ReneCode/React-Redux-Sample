import React, { Component } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
