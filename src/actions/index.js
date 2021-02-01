export const createTodo = (todo) => {
  return {
    type: "CREATE_TODO",
    todo,
  };
};

export const selectTodo = (todo) => {
  return {
    type: "SELECT_TODO",
    todo,
  };
};
