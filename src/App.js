/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTodo } from "./actions";
import store from "./reducers";

const mapStateToProps = (state) => {
  return state;
};

class App extends Component {
  componentDidMount() {
    store.dispatch(selectTodo(this.props.todos[1].todo));
  }

  render() {
    const todos = this.props.todos.map(({ todo }, index) => (
      <li
        key={index}
        onClick={() => {
          store.dispatch(this.props.selectTodo(todo));
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
