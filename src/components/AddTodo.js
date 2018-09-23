import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  onAdd = ev => {
    const { dispatch } = this.props;
    dispatch(addTodo(this.state.text));
    this.setState({
      text: ""
    });
  };

  onChange = ev => {
    const text = ev.target.value;
    this.setState({
      text: text
    });
  };

  render = () => (
    <div>
      Add Todo:
      <input value={this.state.text} onChange={this.onChange} />
      <button onClick={this.onAdd}>Add</button>
    </div>
  );
}

export default connect()(AddTodo);
