/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};
