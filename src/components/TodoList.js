import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  render = () => (
    <div>
      {this.props.todos.map(todo => {
        return <div>{todo.text}</div>;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
