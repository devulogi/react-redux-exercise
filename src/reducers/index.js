import { createStore, combineReducers } from "redux";

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...todos, action.todo];
    default:
      return todos;
  }
};

const selectedTodo = (todo = "", action) => {
  if (action.type === "SELECT_TODO") {
    todo = action.todo;
    return todo;
  }
  return todo;
};

const store = createStore(
  combineReducers({
    todos: todoReducer,
    todo: selectedTodo,
  })
);

export default store;
