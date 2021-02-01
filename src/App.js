/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTodo } from "./actions";

const mapStateToProps = (state) => {
  return state;
};

class App extends Component {
  componentDidMount() {
    this.props.selectTodo(this.props.todos[1].todo);
  }

  render() {
    const todos = this.props.todos.map(({ todo }, index) => (
      <li
        key={index}
        onClick={() => {
          this.props.selectTodo(todo);
        }}
      >
        {todo}
      </li>
    ));

    return (
      <div>
        <ul>{todos}</ul>
        <label>Selected todo: {this.props.todo}</label>
      </div>
    );
  }
}

export default connect(mapStateToProps, { selectTodo })(App);
